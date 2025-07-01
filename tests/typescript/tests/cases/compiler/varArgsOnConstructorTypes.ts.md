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
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 32
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
                    "name": "ctor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 37
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 39,
                  "end": 42
                },
                "expression": false,
                "start": 32,
                "end": 42
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 21,
              "end": 42
            }
          ],
          "start": 15,
          "end": 44
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 60
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 70
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
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 87
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 89,
                  "end": 95
                },
                "start": 87,
                "end": 95
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 77,
              "end": 96
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 111
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 113,
                  "end": 119
                },
                "start": 111,
                "end": 119
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 101,
              "end": 120
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
                "start": 126,
                "end": 137
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
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 147,
                        "end": 150
                      },
                      "start": 145,
                      "end": 150
                    },
                    "start": 138,
                    "end": 150
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "url",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 157,
                        "end": 163
                      },
                      "start": 155,
                      "end": 163
                    },
                    "start": 152,
                    "end": 163
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Super",
                          "start": 174,
                          "end": 179
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "element",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 180,
                            "end": 187
                          }
                        ],
                        "optional": false,
                        "start": 174,
                        "end": 188
                      },
                      "directive": null,
                      "start": 174,
                      "end": 189
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 198,
                            "end": 202
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 203,
                            "end": 205
                          },
                          "optional": false,
                          "computed": false,
                          "start": 198,
                          "end": 205
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 215
                        },
                        "start": 198,
                        "end": 215
                      },
                      "directive": null,
                      "start": 198,
                      "end": 216
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 225,
                            "end": 229
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 230,
                            "end": 232
                          },
                          "optional": false,
                          "computed": false,
                          "start": 225,
                          "end": 232
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "url",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 235,
                          "end": 238
                        },
                        "start": 225,
                        "end": 238
                      },
                      "directive": null,
                      "start": 225,
                      "end": 239
                    }
                  ],
                  "start": 165,
                  "end": 245
                },
                "expression": false,
                "start": 137,
                "end": 245
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 126,
              "end": 245
            }
          ],
          "start": 71,
          "end": 247
        },
        "abstract": false,
        "declare": false,
        "start": 53,
        "end": 247
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 46,
      "end": 247
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 268
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
                "name": "register",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 283
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inputClass",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 309
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 311,
                                "end": 314
                              },
                              "start": 311,
                              "end": 316
                            },
                            "start": 309,
                            "end": 316
                          },
                          "value": null,
                          "start": 300,
                          "end": 316
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 321,
                            "end": 322
                          },
                          "typeArguments": null,
                          "start": 321,
                          "end": 322
                        },
                        "start": 318,
                        "end": 322
                      },
                      "start": 296,
                      "end": 322
                    },
                    "start": 294,
                    "end": 322
                  },
                  "start": 284,
                  "end": 322
                }
              ],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 275,
              "end": 324
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "register",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 337
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inputClass",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "params",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 360,
                                  "end": 366
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 368,
                                      "end": 371
                                    },
                                    "start": 368,
                                    "end": 373
                                  },
                                  "start": 366,
                                  "end": 373
                                },
                                "value": null,
                                "start": 357,
                                "end": 373
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 376,
                                  "end": 377
                                },
                                "typeArguments": null,
                                "start": 376,
                                "end": 377
                              },
                              "start": 374,
                              "end": 377
                            },
                            "start": 352,
                            "end": 378
                          }
                        ],
                        "start": 350,
                        "end": 380
                      },
                      "start": 350,
                      "end": 382
                    },
                    "start": 348,
                    "end": 382
                  },
                  "start": 338,
                  "end": 382
                }
              ],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 329,
              "end": 384
            }
          ],
          "start": 269,
          "end": 386
        },
        "declare": false,
        "start": 256,
        "end": 386
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 249,
      "end": 386
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
            "name": "reg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 400
                },
                "typeArguments": null,
                "start": 398,
                "end": 400
              },
              "start": 396,
              "end": 400
            },
            "start": 393,
            "end": 400
          },
          "init": null,
          "definite": false,
          "start": 393,
          "end": 400
        }
      ],
      "declare": false,
      "start": 389,
      "end": 401
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
            "name": "reg",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 405
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "register",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 414
          },
          "optional": false,
          "computed": false,
          "start": 402,
          "end": 414
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 416
          }
        ],
        "optional": false,
        "start": 402,
        "end": 417
      },
      "directive": null,
      "start": 402,
      "end": 418
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 418
}
```
