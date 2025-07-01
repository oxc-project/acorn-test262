__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HandleOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 18
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 32
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "typeArguments": null,
            "start": 42,
            "end": 43
          },
          "start": 36,
          "end": 43
        },
        "nameType": null,
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 61
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 64
                    },
                    "typeArguments": null,
                    "start": 63,
                    "end": 64
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    },
                    "typeArguments": null,
                    "start": 65,
                    "end": 66
                  },
                  "start": 63,
                  "end": 67
                },
                "start": 61,
                "end": 67
              },
              "accessibility": null,
              "static": false,
              "start": 56,
              "end": 68
            }
          ],
          "start": 46,
          "end": 74
        },
        "optional": false,
        "readonly": null,
        "start": 24,
        "end": 77
      },
      "declare": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 102
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 124
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 136
                    },
                    "typeArguments": null,
                    "start": 125,
                    "end": 136
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 147,
                        "end": 150
                      },
                      "start": 147,
                      "end": 152
                    },
                    "start": 138,
                    "end": 152
                  }
                ],
                "start": 124,
                "end": 153
              },
              "start": 118,
              "end": 153
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 108,
            "end": 153
          }
        ],
        "start": 102,
        "end": 156
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "typeArguments": null,
                  "start": 183,
                  "end": 184
                },
                "start": 177,
                "end": 184
              },
              "nameType": null,
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
                      "name": "label",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 202
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 204,
                        "end": 210
                      },
                      "start": 202,
                      "end": 210
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 197,
                    "end": 211
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 227
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "HandleOptions",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 233,
                                "end": 246
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSIndexedAccessType",
                                    "objectType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 247,
                                        "end": 248
                                      },
                                      "typeArguments": null,
                                      "start": 247,
                                      "end": 248
                                    },
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 249,
                                        "end": 250
                                      },
                                      "typeArguments": null,
                                      "start": 249,
                                      "end": 250
                                    },
                                    "start": 247,
                                    "end": 251
                                  }
                                ],
                                "start": 246,
                                "end": 252
                              },
                              "start": 233,
                              "end": 252
                            },
                            "start": 230,
                            "end": 252
                          }
                        ],
                        "start": 229,
                        "end": 253
                      },
                      "start": 227,
                      "end": 253
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 220,
                    "end": 254
                  }
                ],
                "start": 187,
                "end": 260
              },
              "optional": false,
              "readonly": null,
              "start": 165,
              "end": 263
            },
            "start": 163,
            "end": 263
          },
          "start": 157,
          "end": 263
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "typeArguments": null,
          "start": 266,
          "end": 267
        },
        "start": 264,
        "end": 267
      },
      "body": null,
      "expression": false,
      "start": 80,
      "end": 268
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 282
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "func1",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 301
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
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 313,
                            "end": 318
                          },
                          "value": {
                            "type": "Literal",
                            "value": "first",
                            "raw": "\"first\"",
                            "start": 320,
                            "end": 327
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 313,
                          "end": 327
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 337,
                            "end": 344
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 378,
                                      "end": 383
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": 123,
                                      "raw": "123",
                                      "start": 385,
                                      "end": 388
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 378,
                                    "end": 388
                                  }
                                ],
                                "start": 360,
                                "end": 403
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
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 435,
                                      "end": 440
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "foo",
                                      "raw": "\"foo\"",
                                      "start": 442,
                                      "end": 447
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 435,
                                    "end": 447
                                  }
                                ],
                                "start": 417,
                                "end": 462
                              }
                            ],
                            "start": 346,
                            "end": 473
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 337,
                          "end": 473
                        }
                      ],
                      "start": 303,
                      "end": 480
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 297,
                    "end": 480
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 486,
                      "end": 491
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
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 503,
                            "end": 508
                          },
                          "value": {
                            "type": "Literal",
                            "value": "second",
                            "raw": "\"second\"",
                            "start": 510,
                            "end": 518
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 503,
                          "end": 518
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 528,
                            "end": 535
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 569,
                                      "end": 574
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "bar",
                                      "raw": "\"bar\"",
                                      "start": 576,
                                      "end": 581
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 569,
                                    "end": 581
                                  }
                                ],
                                "start": 551,
                                "end": 596
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
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 628,
                                      "end": 633
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 635,
                                      "end": 639
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 628,
                                    "end": 639
                                  }
                                ],
                                "start": 610,
                                "end": 654
                              }
                            ],
                            "start": 537,
                            "end": 665
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 528,
                          "end": 665
                        }
                      ],
                      "start": 493,
                      "end": 672
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 486,
                    "end": 672
                  }
                ],
                "start": 291,
                "end": 675
              }
            ],
            "optional": false,
            "start": 285,
            "end": 676
          },
          "definite": false,
          "start": 276,
          "end": 676
        }
      ],
      "declare": false,
      "start": 270,
      "end": 677
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 677
}
```
