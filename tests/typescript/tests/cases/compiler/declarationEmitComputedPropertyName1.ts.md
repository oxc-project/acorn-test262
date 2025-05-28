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
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 80,
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 80,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 81,
            "end": 93,
            "name": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 91,
              "end": 93,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
          "typeName": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 102,
      "end": 279,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 109,
        "end": 279,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 115,
            "end": 278,
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
              "callee": {
                "type": "Identifier",
                "start": 119,
                "end": 125,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 134,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                                "computed": true,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Literal",
                                  "start": 143,
                                  "end": 150,
                                  "value": "a_b_c",
                                  "raw": "\"a_b_c\""
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 151,
                                  "end": 159,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 153,
                                    "end": 159
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 165,
                                "end": 181,
                                "computed": true,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Literal",
                                  "start": 166,
                                  "end": 171,
                                  "value": "sss",
                                  "raw": "\"sss\""
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 172,
                                  "end": 180,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 174,
                                    "end": 180
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 186,
                                "end": 198,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 186,
                                  "end": 189,
                                  "decorators": [],
                                  "name": "s_d",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 189,
                                  "end": 197,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 191,
                                    "end": 197
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 203,
                                "end": 222,
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 203,
                                  "end": 212,
                                  "decorators": [],
                                  "name": "queryData",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 213,
                                  "end": 221,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 215,
                                    "end": 221
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 227,
                                "end": 247,
                                "computed": true,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Literal",
                                  "start": 228,
                                  "end": 237,
                                  "value": "foo bar",
                                  "raw": "\"foo bar\""
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 238,
                                  "end": 246,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 240,
                                    "end": 246
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 255,
                        "end": 273,
                        "computed": true,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "start": 256,
                          "end": 263,
                          "value": "a_b_c",
                          "raw": "\"a_b_c\""
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 264,
                          "end": 272,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 266,
                            "end": 272
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              },
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 281,
      "end": 412,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 288,
        "end": 412,
        "id": {
          "type": "Identifier",
          "start": 298,
          "end": 303,
          "decorators": [],
          "name": "IData",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 304,
          "end": 412,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 308,
              "end": 326,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 309,
                "end": 316,
                "value": "a_b_c",
                "raw": "\"a_b_c\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 317,
                "end": 325,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 319,
                  "end": 325
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 329,
              "end": 410,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 329,
                "end": 335,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Literal",
                        "start": 344,
                        "end": 351,
                        "value": "d_e_f",
                        "raw": "\"d_e_f\""
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 352,
                        "end": 360,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 354,
                          "end": 360
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 366,
                      "end": 380,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 371,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 371,
                        "end": 379,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 373,
                          "end": 379
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 385,
                      "end": 405,
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Literal",
                        "start": 386,
                        "end": 395,
                        "value": "qwe rty",
                        "raw": "\"qwe rty\""
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 396,
                        "end": 404,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 398,
                          "end": 404
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
