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
        "start": 10,
        "end": 11
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
                "start": 32,
                "end": 37
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
                      "start": 48,
                      "end": 59
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
                                "start": 70,
                                "end": 76
                              },
                              "start": 68,
                              "end": 76
                            },
                            "start": 67,
                            "end": 76
                          },
                          "readonly": false,
                          "static": false,
                          "start": 60,
                          "end": 76
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
                                "start": 88,
                                "end": 94
                              },
                              "start": 86,
                              "end": 94
                            },
                            "start": 85,
                            "end": 94
                          },
                          "readonly": false,
                          "static": false,
                          "start": 78,
                          "end": 94
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 96,
                        "end": 99
                      },
                      "expression": false,
                      "start": 59,
                      "end": 99
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 48,
                    "end": 99
                  }
                ],
                "start": 38,
                "end": 105
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 105
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 105
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
                "start": 128,
                "end": 129
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
                                  "start": 159,
                                  "end": 164
                                },
                                "typeArguments": null,
                                "start": 159,
                                "end": 164
                              },
                              "start": 157,
                              "end": 164
                            },
                            "start": 151,
                            "end": 164
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 171,
                              "end": 176
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 177,
                                "end": 178
                              },
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 180,
                                "end": 181
                              }
                            ],
                            "start": 167,
                            "end": 182
                          },
                          "definite": false,
                          "start": 151,
                          "end": 182
                        }
                      ],
                      "declare": false,
                      "start": 147,
                      "end": 183
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 140,
                    "end": 183
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
                        "start": 206,
                        "end": 210
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
                              "start": 225,
                              "end": 236
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
                                        "start": 244,
                                        "end": 249
                                      },
                                      "typeArguments": null,
                                      "start": 244,
                                      "end": 249
                                    },
                                    "start": 242,
                                    "end": 249
                                  },
                                  "start": 237,
                                  "end": 249
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
                                        "start": 256,
                                        "end": 261
                                      },
                                      "typeArguments": null,
                                      "start": 256,
                                      "end": 261
                                    },
                                    "start": 254,
                                    "end": 261
                                  },
                                  "start": 251,
                                  "end": 261
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 263,
                                "end": 279
                              },
                              "expression": false,
                              "start": 236,
                              "end": 279
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 225,
                            "end": 279
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
                              "start": 300,
                              "end": 310
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
                                        "start": 314,
                                        "end": 319
                                      },
                                      "typeArguments": null,
                                      "start": 314,
                                      "end": 319
                                    },
                                    "start": 312,
                                    "end": 319
                                  },
                                  "start": 311,
                                  "end": 319
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
                                        "start": 350,
                                        "end": 354
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
                                                "start": 363,
                                                "end": 364
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0",
                                                "start": 366,
                                                "end": 367
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 363,
                                              "end": 367
                                            }
                                          ],
                                          "start": 355,
                                          "end": 369
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "p",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 371,
                                          "end": 372
                                        }
                                      ],
                                      "start": 346,
                                      "end": 373
                                    },
                                    "start": 339,
                                    "end": 374
                                  }
                                ],
                                "start": 321,
                                "end": 388
                              },
                              "expression": false,
                              "start": 310,
                              "end": 388
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 293,
                            "end": 388
                          }
                        ],
                        "start": 211,
                        "end": 398
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 200,
                      "end": 398
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 193,
                    "end": 398
                  }
                ],
                "start": 130,
                "end": 404
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 118,
              "end": 404
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 111,
            "end": 404
          }
        ],
        "start": 12,
        "end": 406
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 406
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 406
}
```
