__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "prepareConfig",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 29
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "additionalFiles",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 51
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 67
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "json",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 63,
                              "end": 67
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 70,
                              "end": 72
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 72
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 63,
                          "end": 72
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 78
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 81,
                      "end": 83
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 83
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 36,
                  "end": 83
                }
              ],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "additionalFiles",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 106
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 116
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Record",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 117,
                                  "end": 123
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "json",
                                            "raw": "\"json\"",
                                            "start": 124,
                                            "end": 130
                                          },
                                          "start": 124,
                                          "end": 130
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "jsonc",
                                            "raw": "\"jsonc\"",
                                            "start": 133,
                                            "end": 140
                                          },
                                          "start": 133,
                                          "end": 140
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "json5",
                                            "raw": "\"json5\"",
                                            "start": 143,
                                            "end": 150
                                          },
                                          "start": 143,
                                          "end": 150
                                        }
                                      ],
                                      "start": 124,
                                      "end": 150
                                    },
                                    {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSStringKeyword",
                                        "start": 152,
                                        "end": 158
                                      },
                                      "start": 152,
                                      "end": 160
                                    }
                                  ],
                                  "start": 123,
                                  "end": 161
                                },
                                "start": 117,
                                "end": 161
                              }
                            ],
                            "start": 116,
                            "end": 162
                          },
                          "start": 109,
                          "end": 162
                        },
                        "start": 107,
                        "end": 162
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 91,
                      "end": 163
                    }
                  ],
                  "start": 87,
                  "end": 165
                },
                "start": 85,
                "end": 165
              },
              "start": 30,
              "end": 165
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 168,
              "end": 170
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 170
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "json",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 182
              },
              "directive": null,
              "start": 178,
              "end": 182
            }
          ],
          "start": 172,
          "end": 196
        },
        "expression": false,
        "start": 7,
        "end": 196
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 196
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "prepareConfigWithoutAnnotation",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 244
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "additionalFiles",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 266
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 282
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "json",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 278,
                              "end": 282
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 285,
                              "end": 287
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 287
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 278,
                          "end": 287
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 293
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 296,
                      "end": 298
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 298
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 251,
                  "end": 298
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 300
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 303,
              "end": 305
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 305
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "json",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 317
              },
              "directive": null,
              "start": 313,
              "end": 317
            }
          ],
          "start": 307,
          "end": 319
        },
        "expression": false,
        "start": 205,
        "end": 319
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 319
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "prepareConfigWithContextualSignature",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "additionalFiles",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 383,
                                "end": 398
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Partial",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 401,
                                    "end": 408
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Record",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 409,
                                          "end": 415
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSUnionType",
                                              "types": [
                                                {
                                                  "type": "TSLiteralType",
                                                  "literal": {
                                                    "type": "Literal",
                                                    "value": "json",
                                                    "raw": "\"json\"",
                                                    "start": 416,
                                                    "end": 422
                                                  },
                                                  "start": 416,
                                                  "end": 422
                                                },
                                                {
                                                  "type": "TSLiteralType",
                                                  "literal": {
                                                    "type": "Literal",
                                                    "value": "jsonc",
                                                    "raw": "\"jsonc\"",
                                                    "start": 425,
                                                    "end": 432
                                                  },
                                                  "start": 425,
                                                  "end": 432
                                                },
                                                {
                                                  "type": "TSLiteralType",
                                                  "literal": {
                                                    "type": "Literal",
                                                    "value": "json5",
                                                    "raw": "\"json5\"",
                                                    "start": 435,
                                                    "end": 442
                                                  },
                                                  "start": 435,
                                                  "end": 442
                                                }
                                              ],
                                              "start": 416,
                                              "end": 442
                                            },
                                            {
                                              "type": "TSArrayType",
                                              "elementType": {
                                                "type": "TSStringKeyword",
                                                "start": 444,
                                                "end": 450
                                              },
                                              "start": 444,
                                              "end": 452
                                            }
                                          ],
                                          "start": 415,
                                          "end": 453
                                        },
                                        "start": 409,
                                        "end": 453
                                      }
                                    ],
                                    "start": 408,
                                    "end": 454
                                  },
                                  "start": 401,
                                  "end": 454
                                },
                                "start": 399,
                                "end": 454
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 383,
                              "end": 455
                            }
                          ],
                          "start": 379,
                          "end": 457
                        },
                        "start": 378,
                        "end": 457
                      },
                      "start": 373,
                      "end": 457
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 462,
                      "end": 466
                    },
                    "start": 459,
                    "end": 466
                  },
                  "start": 372,
                  "end": 466
                },
                "start": 370,
                "end": 466
              },
              "start": 334,
              "end": 466
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "additionalFiles",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 476,
                          "end": 491
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "ObjectPattern",
                            "decorators": [],
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "json",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 503,
                                  "end": 507
                                },
                                "value": {
                                  "type": "AssignmentPattern",
                                  "decorators": [],
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "json",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 503,
                                    "end": 507
                                  },
                                  "right": {
                                    "type": "ArrayExpression",
                                    "elements": [],
                                    "start": 510,
                                    "end": 512
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 503,
                                  "end": 512
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 503,
                                "end": 512
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 493,
                            "end": 518
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 521,
                            "end": 523
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 493,
                          "end": 523
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 476,
                        "end": 523
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 525
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 528,
                    "end": 530
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 530
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "json",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 545
                    },
                    "directive": null,
                    "start": 541,
                    "end": 545
                  }
                ],
                "start": 535,
                "end": 559
              },
              "id": null,
              "generator": false,
              "start": 469,
              "end": 559
            },
            "definite": false,
            "start": 334,
            "end": 559
          }
        ],
        "declare": false,
        "start": 328,
        "end": 559
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 321,
      "end": 559
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 559
}
```
