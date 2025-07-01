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
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "type": "PrivateIdentifier",
                "name": "used",
                "start": 21,
                "end": 26
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "used",
                "raw": "\"used\"",
                "start": 29,
                "end": 35
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 21,
              "end": 36
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "unused",
                "start": 41,
                "end": 48
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "unused",
                "raw": "\"unused\"",
                "start": 51,
                "end": 59
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 41,
              "end": 60
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
                "start": 65,
                "end": 76
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 97
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 98,
                            "end": 101
                          },
                          "optional": false,
                          "computed": false,
                          "start": 90,
                          "end": 101
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 102,
                              "end": 106
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "used",
                              "start": 107,
                              "end": 112
                            },
                            "optional": false,
                            "computed": false,
                            "start": 102,
                            "end": 112
                          }
                        ],
                        "optional": false,
                        "start": 90,
                        "end": 113
                      },
                      "directive": null,
                      "start": 90,
                      "end": 114
                    }
                  ],
                  "start": 80,
                  "end": 120
                },
                "expression": false,
                "start": 77,
                "end": 120
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 65,
              "end": 120
            }
          ],
          "start": 15,
          "end": 122
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 122
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 122
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A2",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 139
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
                "type": "PrivateIdentifier",
                "name": "used",
                "start": 146,
                "end": 151
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
                  "start": 154,
                  "end": 158
                },
                "expression": false,
                "start": 151,
                "end": 158
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 146,
              "end": 158
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "unused",
                "start": 164,
                "end": 171
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
                  "start": 174,
                  "end": 177
                },
                "expression": false,
                "start": 171,
                "end": 177
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 164,
              "end": 177
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
                "start": 183,
                "end": 194
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 208,
                            "end": 215
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 216,
                            "end": 219
                          },
                          "optional": false,
                          "computed": false,
                          "start": 208,
                          "end": 219
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 220,
                                "end": 224
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "used",
                                "start": 225,
                                "end": 230
                              },
                              "optional": false,
                              "computed": false,
                              "start": 220,
                              "end": 230
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 220,
                            "end": 232
                          }
                        ],
                        "optional": false,
                        "start": 208,
                        "end": 233
                      },
                      "directive": null,
                      "start": 208,
                      "end": 234
                    }
                  ],
                  "start": 198,
                  "end": 240
                },
                "expression": false,
                "start": 195,
                "end": 240
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 183,
              "end": 240
            }
          ],
          "start": 140,
          "end": 242
        },
        "abstract": false,
        "declare": false,
        "start": 131,
        "end": 242
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 242
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A3",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 259
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
                "type": "PrivateIdentifier",
                "name": "used",
                "start": 270,
                "end": 275
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
                        "value": 0,
                        "raw": "0",
                        "start": 287,
                        "end": 288
                      },
                      "start": 280,
                      "end": 288
                    }
                  ],
                  "start": 278,
                  "end": 290
                },
                "expression": false,
                "start": 275,
                "end": 290
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 266,
              "end": 290
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "used",
                "start": 300,
                "end": 305
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 313,
                        "end": 319
                      },
                      "start": 311,
                      "end": 319
                    },
                    "start": 306,
                    "end": 319
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 321,
                  "end": 325
                },
                "expression": false,
                "start": 305,
                "end": 325
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 296,
              "end": 325
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "unused",
                "start": 340,
                "end": 347
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
                        "value": 0,
                        "raw": "0",
                        "start": 359,
                        "end": 360
                      },
                      "start": 352,
                      "end": 360
                    }
                  ],
                  "start": 350,
                  "end": 362
                },
                "expression": false,
                "start": 347,
                "end": 362
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 336,
              "end": 362
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "unused",
                "start": 372,
                "end": 379
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 387,
                        "end": 393
                      },
                      "start": 385,
                      "end": 393
                    },
                    "start": 380,
                    "end": 393
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 395,
                  "end": 399
                },
                "expression": false,
                "start": 379,
                "end": 399
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 368,
              "end": 399
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
                "start": 405,
                "end": 416
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 430,
                            "end": 437
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 438,
                            "end": 441
                          },
                          "optional": false,
                          "computed": false,
                          "start": 430,
                          "end": 441
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 442,
                              "end": 446
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "used",
                              "start": 447,
                              "end": 452
                            },
                            "optional": false,
                            "computed": false,
                            "start": 442,
                            "end": 452
                          }
                        ],
                        "optional": false,
                        "start": 430,
                        "end": 453
                      },
                      "directive": null,
                      "start": 430,
                      "end": 454
                    }
                  ],
                  "start": 420,
                  "end": 460
                },
                "expression": false,
                "start": 417,
                "end": 460
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 405,
              "end": 460
            }
          ],
          "start": 260,
          "end": 462
        },
        "abstract": false,
        "declare": false,
        "start": 251,
        "end": 462
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 244,
      "end": 462
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 462
}
```
