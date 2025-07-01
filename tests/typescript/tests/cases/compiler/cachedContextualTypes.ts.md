__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createInstance",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Ctor",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 58
            },
            "constraint": {
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
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 79
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 81,
                        "end": 84
                      },
                      "start": 81,
                      "end": 86
                    },
                    "start": 79,
                    "end": 86
                  },
                  "value": null,
                  "start": 72,
                  "end": 86
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 91,
                  "end": 94
                },
                "start": 88,
                "end": 94
              },
              "start": 67,
              "end": 94
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 54,
            "end": 94
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InstanceType",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 118
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ctor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 119,
                    "end": 123
                  }
                ],
                "start": 118,
                "end": 124
              },
              "start": 106,
              "end": 124
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 96,
            "end": 124
          }
        ],
        "start": 53,
        "end": 125
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ctor",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 136
              },
              "typeArguments": null,
              "start": 132,
              "end": 136
            },
            "start": 130,
            "end": 136
          },
          "start": 126,
          "end": 136
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 145
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConstructorParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 168
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ctor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 173
                    },
                    "typeArguments": null,
                    "start": 169,
                    "end": 173
                  }
                ],
                "start": 168,
                "end": 174
              },
              "start": 147,
              "end": 174
            },
            "start": 145,
            "end": 174
          },
          "value": null,
          "start": 138,
          "end": 174
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 178
          },
          "typeArguments": null,
          "start": 177,
          "end": 178
        },
        "start": 175,
        "end": 178
      },
      "body": null,
      "expression": false,
      "start": 22,
      "end": 179
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IMenuWorkbenchToolBarOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 226
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
                "name": "toolbarOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 247
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 259,
                        "end": 262
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 268,
                              "end": 274
                            },
                            "start": 266,
                            "end": 274
                          },
                          "start": 263,
                          "end": 274
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 277,
                          "end": 283
                        },
                        "start": 275,
                        "end": 283
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 259,
                      "end": 283
                    }
                  ],
                  "start": 249,
                  "end": 289
                },
                "start": 247,
                "end": 289
              },
              "accessibility": null,
              "static": false,
              "start": 233,
              "end": 290
            }
          ],
          "start": 227,
          "end": 292
        },
        "declare": false,
        "start": 188,
        "end": 292
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 181,
      "end": 292
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MenuWorkbenchToolBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 300,
        "end": 320
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
              "start": 327,
              "end": 338
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
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IMenuWorkbenchToolBarOptions",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 357,
                            "end": 385
                          },
                          "typeArguments": null,
                          "start": 357,
                          "end": 385
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 388,
                          "end": 397
                        }
                      ],
                      "start": 357,
                      "end": 397
                    },
                    "start": 355,
                    "end": 397
                  },
                  "start": 348,
                  "end": 397
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 405,
                "end": 408
              },
              "expression": false,
              "start": 338,
              "end": 408
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 327,
            "end": 408
          }
        ],
        "start": 321,
        "end": 410
      },
      "abstract": false,
      "declare": false,
      "start": 294,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createInstance",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 426
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "MenuWorkbenchToolBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 447
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toolbarOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 455,
                  "end": 469
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 481,
                        "end": 484
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
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 485,
                            "end": 488
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 499,
                                "end": 502
                              },
                              "start": 492,
                              "end": 503
                            }
                          ],
                          "start": 490,
                          "end": 505
                        },
                        "expression": false,
                        "start": 484,
                        "end": 505
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 481,
                      "end": 505
                    }
                  ],
                  "start": 471,
                  "end": 511
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 455,
                "end": 511
              }
            ],
            "start": 449,
            "end": 513
          }
        ],
        "optional": false,
        "start": 412,
        "end": 514
      },
      "directive": null,
      "start": 412,
      "end": 515
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 515
}
```
