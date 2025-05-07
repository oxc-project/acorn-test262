__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 412,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 100,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 80,
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 96,
        "end": 99,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 98,
          "end": 99,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 80,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 81,
            "end": 93,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 91,
              "end": 93,
              "members": []
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 102,
      "end": 279,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 109,
        "end": 279,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 115,
            "end": 278,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 119,
              "end": 278,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 119,
                "end": 125,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 125,
                "end": 276,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 126,
                    "end": 275,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 130,
                        "end": 252,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 134,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 134,
                          "end": 251,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 136,
                            "end": 251,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 142,
                                "end": 160,
                                "accessibility": null,
                                "computed": true,
                                "key": {
                                  "type": "Literal",
                                  "start": 143,
                                  "end": 150,
                                  "raw": "\"a_b_c\"",
                                  "value": "a_b_c",
                                  "regex": null,
                                  "bigint": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 151,
                                  "end": 159,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 153,
                                    "end": 159
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 165,
                                "end": 181,
                                "accessibility": null,
                                "computed": true,
                                "key": {
                                  "type": "Literal",
                                  "start": 166,
                                  "end": 171,
                                  "raw": "\"sss\"",
                                  "value": "sss",
                                  "regex": null,
                                  "bigint": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 172,
                                  "end": 180,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 174,
                                    "end": 180
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 186,
                                "end": 198,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 186,
                                  "end": 189,
                                  "decorators": [],
                                  "name": "s_d",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 189,
                                  "end": 197,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 191,
                                    "end": 197
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 203,
                                "end": 222,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 203,
                                  "end": 212,
                                  "decorators": [],
                                  "name": "queryData",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": true,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 213,
                                  "end": 221,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 215,
                                    "end": 221
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 227,
                                "end": 247,
                                "accessibility": null,
                                "computed": true,
                                "key": {
                                  "type": "Literal",
                                  "start": 228,
                                  "end": 237,
                                  "raw": "\"foo bar\"",
                                  "value": "foo bar",
                                  "regex": null,
                                  "bigint": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 238,
                                  "end": 246,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 240,
                                    "end": 246
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 255,
                        "end": 273,
                        "accessibility": null,
                        "computed": true,
                        "key": {
                          "type": "Literal",
                          "start": 256,
                          "end": 263,
                          "raw": "\"a_b_c\"",
                          "value": "a_b_c",
                          "regex": null,
                          "bigint": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 264,
                          "end": 272,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 266,
                            "end": 272
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 281,
      "end": 412,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 288,
        "end": 412,
        "body": {
          "type": "TSInterfaceBody",
          "start": 304,
          "end": 412,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 308,
              "end": 326,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Literal",
                "start": 309,
                "end": 316,
                "raw": "\"a_b_c\"",
                "value": "a_b_c",
                "regex": null,
                "bigint": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 317,
                "end": 325,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 319,
                  "end": 325
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 329,
              "end": 410,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 329,
                "end": 335,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 335,
                "end": 409,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 337,
                  "end": 409,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 343,
                      "end": 361,
                      "accessibility": null,
                      "computed": true,
                      "key": {
                        "type": "Literal",
                        "start": 344,
                        "end": 351,
                        "raw": "\"d_e_f\"",
                        "value": "d_e_f",
                        "regex": null,
                        "bigint": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 352,
                        "end": 360,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 354,
                          "end": 360
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 366,
                      "end": 380,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 371,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 371,
                        "end": 379,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 373,
                          "end": 379
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 385,
                      "end": 405,
                      "accessibility": null,
                      "computed": true,
                      "key": {
                        "type": "Literal",
                        "start": 386,
                        "end": 395,
                        "raw": "\"qwe rty\"",
                        "value": "qwe rty",
                        "regex": null,
                        "bigint": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 396,
                        "end": 404,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 398,
                          "end": 404
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 298,
          "end": 303,
          "decorators": [],
          "name": "IData",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
