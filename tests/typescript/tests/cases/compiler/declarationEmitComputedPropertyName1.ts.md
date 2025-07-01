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
        "name": "create",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 80
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
              "start": 81,
              "end": 82
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 91,
              "end": 93
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 81,
            "end": 93
          }
        ],
        "start": 80,
        "end": 94
      },
      "params": [],
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
            "start": 98,
            "end": 99
          },
          "typeArguments": null,
          "start": 98,
          "end": 99
        },
        "start": 96,
        "end": 99
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 100
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 125
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 134
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": true,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Literal",
                                  "value": "a_b_c",
                                  "raw": "\"a_b_c\"",
                                  "start": 143,
                                  "end": 150
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 153,
                                    "end": 159
                                  },
                                  "start": 151,
                                  "end": 159
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 142,
                                "end": 160
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": true,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Literal",
                                  "value": "sss",
                                  "raw": "\"sss\"",
                                  "start": 166,
                                  "end": 171
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 174,
                                    "end": 180
                                  },
                                  "start": 172,
                                  "end": 180
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 165,
                                "end": 181
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s_d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 186,
                                  "end": 189
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 191,
                                    "end": 197
                                  },
                                  "start": 189,
                                  "end": 197
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 186,
                                "end": 198
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "queryData",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 203,
                                  "end": 212
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 215,
                                    "end": 221
                                  },
                                  "start": 213,
                                  "end": 221
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 203,
                                "end": 222
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": true,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Literal",
                                  "value": "foo bar",
                                  "raw": "\"foo bar\"",
                                  "start": 228,
                                  "end": 237
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 240,
                                    "end": 246
                                  },
                                  "start": 238,
                                  "end": 246
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 227,
                                "end": 247
                              }
                            ],
                            "start": 136,
                            "end": 251
                          },
                          "start": 134,
                          "end": 251
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 130,
                        "end": 252
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": true,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "value": "a_b_c",
                          "raw": "\"a_b_c\"",
                          "start": 256,
                          "end": 263
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 266,
                            "end": 272
                          },
                          "start": 264,
                          "end": 272
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 255,
                        "end": 273
                      }
                    ],
                    "start": 126,
                    "end": 275
                  }
                ],
                "start": 125,
                "end": 276
              },
              "arguments": [],
              "optional": false,
              "start": 119,
              "end": 278
            },
            "definite": false,
            "start": 115,
            "end": 278
          }
        ],
        "declare": false,
        "start": 109,
        "end": 279
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 102,
      "end": 279
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IData",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 303
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "a_b_c",
                "raw": "\"a_b_c\"",
                "start": 309,
                "end": 316
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 319,
                  "end": 325
                },
                "start": 317,
                "end": 325
              },
              "accessibility": null,
              "static": false,
              "start": 308,
              "end": 326
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 335
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Literal",
                        "value": "d_e_f",
                        "raw": "\"d_e_f\"",
                        "start": 344,
                        "end": 351
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 354,
                          "end": 360
                        },
                        "start": 352,
                        "end": 360
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 343,
                      "end": 361
                    },
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
                        "start": 366,
                        "end": 371
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 373,
                          "end": 379
                        },
                        "start": 371,
                        "end": 379
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 366,
                      "end": 380
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Literal",
                        "value": "qwe rty",
                        "raw": "\"qwe rty\"",
                        "start": 386,
                        "end": 395
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 398,
                          "end": 404
                        },
                        "start": 396,
                        "end": 404
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 385,
                      "end": 405
                    }
                  ],
                  "start": 337,
                  "end": 409
                },
                "start": 335,
                "end": 409
              },
              "accessibility": null,
              "static": false,
              "start": 329,
              "end": 410
            }
          ],
          "start": 304,
          "end": 412
        },
        "declare": false,
        "start": 288,
        "end": 412
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 281,
      "end": 412
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 412
}
```
