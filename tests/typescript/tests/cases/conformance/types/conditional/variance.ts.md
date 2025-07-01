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
        "start": 102,
        "end": 105
      },
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
              "start": 106,
              "end": 107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 107
          }
        ],
        "start": 105,
        "end": 108
      },
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 120
                  },
                  "typeArguments": null,
                  "start": 119,
                  "end": 120
                },
                "extendsType": {
                  "type": "TSUnknownKeyword",
                  "start": 129,
                  "end": 136
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 139,
                    "end": 143
                  },
                  "start": 139,
                  "end": 143
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 146,
                    "end": 151
                  },
                  "start": 146,
                  "end": 151
                },
                "start": 119,
                "end": 151
              },
              "start": 117,
              "end": 151
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 152
          }
        ],
        "start": 109,
        "end": 154
      },
      "declare": false,
      "start": 92,
      "end": 154
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 165
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 174
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 176,
                    "end": 180
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 170,
                  "end": 180
                }
              ],
              "start": 168,
              "end": 182
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 191
              },
              "typeArguments": null,
              "start": 186,
              "end": 191
            },
            "start": 168,
            "end": 191
          },
          "definite": false,
          "start": 162,
          "end": 191
        }
      ],
      "declare": false,
      "start": 156,
      "end": 192
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 205
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 206,
                        "end": 207
                      },
                      "start": 206,
                      "end": 207
                    }
                  ],
                  "start": 205,
                  "end": 208
                },
                "start": 202,
                "end": 208
              },
              "start": 200,
              "end": 208
            },
            "start": 199,
            "end": 208
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 214
          },
          "definite": false,
          "start": 199,
          "end": 214
        }
      ],
      "declare": false,
      "start": 193,
      "end": 215
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
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
                  "start": 225,
                  "end": 228
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 229,
                      "end": 235
                    }
                  ],
                  "start": 228,
                  "end": 236
                },
                "start": 225,
                "end": 236
              },
              "start": 223,
              "end": 236
            },
            "start": 222,
            "end": 236
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 242
          },
          "definite": false,
          "start": 222,
          "end": 242
        }
      ],
      "declare": false,
      "start": 216,
      "end": 243
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
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
                  "start": 253,
                  "end": 256
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 257,
                      "end": 263
                    }
                  ],
                  "start": 256,
                  "end": 264
                },
                "start": 253,
                "end": 264
              },
              "start": 251,
              "end": 264
            },
            "start": 250,
            "end": 264
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 268
          },
          "definite": false,
          "start": 250,
          "end": 268
        }
      ],
      "declare": false,
      "start": 244,
      "end": 269
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
        "start": 300,
        "end": 303
      },
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
              "start": 304,
              "end": 305
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 314,
              "end": 320
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 304,
            "end": 320
          }
        ],
        "start": 303,
        "end": 321
      },
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
              "name": "instance",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 349
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 354
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 355,
                        "end": 361
                      }
                    ],
                    "start": 354,
                    "end": 362
                  },
                  "start": 351,
                  "end": 362
                },
                "start": 351,
                "end": 364
              },
              "start": 349,
              "end": 364
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 367,
              "end": 369
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 326,
            "end": 370
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cast",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 378
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
                  "name": "_name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 388,
                              "end": 389
                            },
                            "typeArguments": null,
                            "start": 388,
                            "end": 389
                          }
                        ],
                        "start": 387,
                        "end": 390
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 400,
                            "end": 406
                          }
                        ],
                        "start": 399,
                        "end": 407
                      },
                      "trueType": {
                        "type": "TSStringKeyword",
                        "start": 410,
                        "end": 416
                      },
                      "falseType": {
                        "type": "TSStringKeyword",
                        "start": 419,
                        "end": 425
                      },
                      "start": 387,
                      "end": 425
                    },
                    "start": 384,
                    "end": 426
                  },
                  "start": 379,
                  "end": 426
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 428,
                "end": 431
              },
              "expression": false,
              "start": 378,
              "end": 431
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 374,
            "end": 431
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pushThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 445
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 454,
                            "end": 457
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 466
                          },
                          "optional": false,
                          "computed": false,
                          "start": 454,
                          "end": 466
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 467,
                          "end": 471
                        },
                        "optional": false,
                        "computed": false,
                        "start": 454,
                        "end": 471
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 472,
                          "end": 476
                        }
                      ],
                      "optional": false,
                      "start": 454,
                      "end": 477
                    },
                    "directive": null,
                    "start": 454,
                    "end": 478
                  }
                ],
                "start": 448,
                "end": 482
              },
              "expression": false,
              "start": 445,
              "end": 482
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 437,
            "end": 482
          }
        ],
        "start": 322,
        "end": 484
      },
      "abstract": false,
      "declare": false,
      "start": 294,
      "end": 484
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 484
}
```
