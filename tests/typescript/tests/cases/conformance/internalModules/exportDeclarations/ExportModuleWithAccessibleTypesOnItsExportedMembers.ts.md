__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 34
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
                      "start": 45,
                      "end": 56
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 67,
                                "end": 73
                              },
                              "start": 65,
                              "end": 73
                            },
                            "start": 64,
                            "end": 73
                          },
                          "readonly": false,
                          "static": false,
                          "start": 57,
                          "end": 73
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 85,
                                "end": 91
                              },
                              "start": 83,
                              "end": 91
                            },
                            "start": 82,
                            "end": 91
                          },
                          "readonly": false,
                          "static": false,
                          "start": 75,
                          "end": 91
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 93,
                        "end": 96
                      },
                      "expression": false,
                      "start": 56,
                      "end": 96
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 45,
                    "end": 96
                  }
                ],
                "start": 35,
                "end": 102
              },
              "abstract": false,
              "declare": false,
              "start": 23,
              "end": 102
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 102
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
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
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 153,
                                  "end": 158
                                },
                                "typeArguments": null,
                                "start": 153,
                                "end": 158
                              },
                              "start": 151,
                              "end": 158
                            },
                            "start": 145,
                            "end": 158
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 165,
                              "end": 170
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 171,
                                "end": 172
                              },
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 174,
                                "end": 175
                              }
                            ],
                            "start": 161,
                            "end": 176
                          },
                          "definite": false,
                          "start": 145,
                          "end": 176
                        }
                      ],
                      "declare": false,
                      "start": 141,
                      "end": 177
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 134,
                    "end": 177
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Line",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 200,
                        "end": 204
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
                              "start": 219,
                              "end": 230
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
                                  "name": "start",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Point",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 238,
                                        "end": 243
                                      },
                                      "typeArguments": null,
                                      "start": 238,
                                      "end": 243
                                    },
                                    "start": 236,
                                    "end": 243
                                  },
                                  "start": 231,
                                  "end": 243
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "end",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Point",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 250,
                                        "end": 255
                                      },
                                      "typeArguments": null,
                                      "start": 250,
                                      "end": 255
                                    },
                                    "start": 248,
                                    "end": 255
                                  },
                                  "start": 245,
                                  "end": 255
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 257,
                                "end": 273
                              },
                              "expression": false,
                              "start": 230,
                              "end": 273
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 219,
                            "end": 273
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fromOrigin",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 294,
                              "end": 304
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
                                  "name": "p",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Point",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 308,
                                        "end": 313
                                      },
                                      "typeArguments": null,
                                      "start": 308,
                                      "end": 313
                                    },
                                    "start": 306,
                                    "end": 313
                                  },
                                  "start": 305,
                                  "end": 313
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Line",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 344,
                                        "end": 348
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
                                                "start": 351,
                                                "end": 352
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0",
                                                "start": 354,
                                                "end": 355
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 351,
                                              "end": 355
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
                                                "start": 357,
                                                "end": 358
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0",
                                                "start": 360,
                                                "end": 361
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 357,
                                              "end": 361
                                            }
                                          ],
                                          "start": 349,
                                          "end": 363
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 365,
                                          "end": 366
                                        }
                                      ],
                                      "start": 340,
                                      "end": 367
                                    },
                                    "start": 333,
                                    "end": 368
                                  }
                                ],
                                "start": 315,
                                "end": 382
                              },
                              "expression": false,
                              "start": 304,
                              "end": 382
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 287,
                            "end": 382
                          }
                        ],
                        "start": 205,
                        "end": 392
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 194,
                      "end": 392
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 187,
                    "end": 392
                  }
                ],
                "start": 124,
                "end": 398
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 115,
              "end": 398
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 108,
            "end": 398
          }
        ],
        "start": 9,
        "end": 400
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 400
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 400
}
```
