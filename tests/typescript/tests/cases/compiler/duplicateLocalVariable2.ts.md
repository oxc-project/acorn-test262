__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 21
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
                "start": 28,
                "end": 39
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 54,
                          "end": 60
                        },
                        "start": 52,
                        "end": 60
                      },
                      "start": 48,
                      "end": 60
                    },
                    "readonly": false,
                    "static": false,
                    "start": 41,
                    "end": 60
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 79,
                              "end": 86
                            },
                            "start": 77,
                            "end": 86
                          },
                          "start": 75,
                          "end": 86
                        },
                        "start": 73,
                        "end": 86
                      },
                      "start": 69,
                      "end": 86
                    },
                    "readonly": false,
                    "static": false,
                    "start": 62,
                    "end": 86
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "errorMessageRegEx",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 115,
                          "end": 121
                        },
                        "start": 113,
                        "end": 121
                      },
                      "start": 95,
                      "end": 121
                    },
                    "readonly": false,
                    "static": false,
                    "start": 88,
                    "end": 121
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 123,
                  "end": 130
                },
                "expression": false,
                "start": 40,
                "end": 130
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 28,
              "end": 130
            }
          ],
          "start": 22,
          "end": 132
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 132
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestRunner",
          "optional": false,
          "typeAnnotation": null,
          "start": 146,
          "end": 156
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
                "name": "arrayCompare",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 183
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 190,
                          "end": 193
                        },
                        "start": 190,
                        "end": 195
                      },
                      "start": 188,
                      "end": 195
                    },
                    "start": 184,
                    "end": 195
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 203,
                          "end": 206
                        },
                        "start": 203,
                        "end": 208
                      },
                      "start": 201,
                      "end": 208
                    },
                    "start": 197,
                    "end": 208
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 211,
                    "end": 218
                  },
                  "start": 209,
                  "end": 218
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 236,
                        "end": 241
                      },
                      "start": 229,
                      "end": 242
                    }
                  ],
                  "start": 219,
                  "end": 248
                },
                "expression": false,
                "start": 183,
                "end": 248
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 164,
              "end": 248
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "addTest",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 268
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TestCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 275,
                          "end": 283
                        },
                        "typeArguments": null,
                        "start": 275,
                        "end": 283
                      },
                      "start": 273,
                      "end": 283
                    },
                    "start": 269,
                    "end": 283
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 285,
                  "end": 292
                },
                "expression": false,
                "start": 268,
                "end": 292
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 254,
              "end": 292
            }
          ],
          "start": 157,
          "end": 294
        },
        "abstract": false,
        "declare": false,
        "start": 140,
        "end": 294
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 133,
      "end": 294
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "tests",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TestRunner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 324
                  },
                  "typeArguments": null,
                  "start": 314,
                  "end": 324
                },
                "start": 312,
                "end": 324
              },
              "start": 307,
              "end": 324
            },
            "init": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 350,
                            "end": 360
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestRunner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 367,
                              "end": 377
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 363,
                            "end": 379
                          },
                          "definite": false,
                          "start": 350,
                          "end": 379
                        }
                      ],
                      "declare": false,
                      "start": 346,
                      "end": 380
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 386,
                            "end": 396
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 397,
                            "end": 404
                          },
                          "optional": false,
                          "computed": false,
                          "start": 386,
                          "end": 404
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 409,
                              "end": 417
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check UTF8 encoding",
                                "raw": "\"Check UTF8 encoding\"",
                                "start": 418,
                                "end": 439
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSAnyKeyword",
                                                "start": 483,
                                                "end": 486
                                              },
                                              "start": 481,
                                              "end": 486
                                            },
                                            "start": 479,
                                            "end": 486
                                          },
                                          "init": null,
                                          "definite": false,
                                          "start": 479,
                                          "end": 486
                                        }
                                      ],
                                      "declare": false,
                                      "start": 475,
                                      "end": 487
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 500,
                                            "end": 502
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "writeUtf8Bom",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 503,
                                            "end": 515
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 500,
                                          "end": 515
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 500,
                                        "end": 517
                                      },
                                      "directive": null,
                                      "start": 500,
                                      "end": 518
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 535,
                                            "end": 540
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x0054",
                                                "start": 544,
                                                "end": 550
                                              }
                                            ],
                                            "start": 543,
                                            "end": 551
                                          },
                                          "definite": false,
                                          "start": 535,
                                          "end": 551
                                        }
                                      ],
                                      "declare": false,
                                      "start": 531,
                                      "end": 552
                                    },
                                    {
                                      "type": "ForInStatement",
                                      "left": {
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 574,
                                              "end": 575
                                            },
                                            "init": null,
                                            "definite": false,
                                            "start": 574,
                                            "end": 575
                                          }
                                        ],
                                        "declare": false,
                                        "start": 570,
                                        "end": 575
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "chars",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 579,
                                        "end": 584
                                      },
                                      "body": {
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
                                                  "name": "fb",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 604,
                                                  "end": 606
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "writeUtf8CodePoint",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 607,
                                                  "end": 625
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 604,
                                                "end": 625
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "chars",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 626,
                                                    "end": 631
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "i",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 632,
                                                    "end": 633
                                                  },
                                                  "optional": false,
                                                  "computed": true,
                                                  "start": 626,
                                                  "end": 634
                                                }
                                              ],
                                              "optional": false,
                                              "start": 604,
                                              "end": 635
                                            },
                                            "directive": null,
                                            "start": 604,
                                            "end": 636
                                          }
                                        ],
                                        "start": 586,
                                        "end": 650
                                      },
                                      "start": 565,
                                      "end": 650
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 663,
                                            "end": 665
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 666,
                                            "end": 671
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 663,
                                          "end": 671
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 674,
                                          "end": 675
                                        },
                                        "start": 663,
                                        "end": 675
                                      },
                                      "directive": null,
                                      "start": 663,
                                      "end": 676
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
                                            "name": "bytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 693,
                                            "end": 698
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 701,
                                            "end": 703
                                          },
                                          "definite": false,
                                          "start": 693,
                                          "end": 703
                                        }
                                      ],
                                      "declare": false,
                                      "start": 689,
                                      "end": 704
                                    },
                                    {
                                      "type": "ForStatement",
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 726,
                                              "end": 727
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 730,
                                              "end": 731
                                            },
                                            "definite": false,
                                            "start": 726,
                                            "end": 731
                                          }
                                        ],
                                        "declare": false,
                                        "start": 722,
                                        "end": 731
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 733,
                                          "end": 734
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 14,
                                          "raw": "14",
                                          "start": 737,
                                          "end": 739
                                        },
                                        "start": 733,
                                        "end": 739
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 741,
                                          "end": 742
                                        },
                                        "start": 741,
                                        "end": 744
                                      },
                                      "body": {
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
                                                  "name": "bytes",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 764,
                                                  "end": 769
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 770,
                                                  "end": 774
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 764,
                                                "end": 774
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 775,
                                                      "end": 777
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readByte",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 778,
                                                      "end": 786
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 775,
                                                    "end": 786
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 775,
                                                  "end": 788
                                                }
                                              ],
                                              "optional": false,
                                              "start": 764,
                                              "end": 789
                                            },
                                            "directive": null,
                                            "start": 764,
                                            "end": 790
                                          }
                                        ],
                                        "start": 746,
                                        "end": 804
                                      },
                                      "start": 717,
                                      "end": 804
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
                                            "name": "expected",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 821,
                                            "end": 829
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 239,
                                                "raw": "0xEF",
                                                "start": 833,
                                                "end": 837
                                              }
                                            ],
                                            "start": 832,
                                            "end": 838
                                          },
                                          "definite": false,
                                          "start": 821,
                                          "end": 838
                                        }
                                      ],
                                      "declare": false,
                                      "start": 817,
                                      "end": 839
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 859,
                                            "end": 869
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 870,
                                            "end": 882
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 859,
                                          "end": 882
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 883,
                                            "end": 888
                                          },
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "expected",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 890,
                                            "end": 898
                                          }
                                        ],
                                        "optional": false,
                                        "start": 859,
                                        "end": 899
                                      },
                                      "start": 852,
                                      "end": 900
                                    }
                                  ],
                                  "start": 461,
                                  "end": 910
                                },
                                "expression": false,
                                "start": 449,
                                "end": 910
                              }
                            ],
                            "start": 405,
                            "end": 911
                          }
                        ],
                        "optional": false,
                        "start": 386,
                        "end": 912
                      },
                      "directive": null,
                      "start": 386,
                      "end": 913
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "testRunner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 926,
                        "end": 936
                      },
                      "start": 919,
                      "end": 937
                    }
                  ],
                  "start": 340,
                  "end": 939
                },
                "expression": false,
                "start": 328,
                "end": 939
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 327,
              "end": 942
            },
            "definite": false,
            "start": 307,
            "end": 942
          }
        ],
        "declare": false,
        "start": 303,
        "end": 943
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 296,
      "end": 943
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 943
}
```
