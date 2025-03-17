__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 306,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Keys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 12,
        "end": 21,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 12,
            "end": 15,
            "literal": {
              "type": "Literal",
              "start": 12,
              "end": 15,
              "value": "a",
              "raw": "\"a\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 18,
            "end": 21,
            "literal": {
              "type": "Literal",
              "start": 18,
              "end": 21,
              "value": "b",
              "raw": "\"b\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 42,
        "name": "OptionsForKey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 45,
        "end": 93,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 45,
            "end": 81,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 47,
                "end": 79,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 48,
                  "end": 79,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 50,
                    "end": 79,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 52,
                        "end": 77,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 52,
                          "end": 54,
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 54,
                          "end": 77,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 56,
                            "end": 77,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 57,
                                "end": 66,
                                "name": "p",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 58,
                                  "end": 66,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 60,
                                    "end": 66
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 68,
                              "end": 77,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 71,
                                "end": 77
                              }
                            }
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
          {
            "type": "TSTypeLiteral",
            "start": 84,
            "end": 93,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 86,
                "end": 91,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 87,
                  "end": 91,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 89,
                    "end": 91,
                    "members": []
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 96,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 137,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 137,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 136,
              "end": 137,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 139,
          "end": 164,
          "name": "options",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 164,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 148,
              "end": 164,
              "objectType": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 161,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 161,
                  "name": "OptionsForKey",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 162,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 129,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 129,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 129,
                "name": "Keys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 165,
        "end": 171,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 167,
          "end": 171
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 202,
      "expression": {
        "type": "CallExpression",
        "start": 174,
        "end": 201,
        "callee": {
          "type": "Identifier",
          "start": 174,
          "end": 175,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 176,
            "end": 179,
            "value": "a",
            "raw": "\"a\""
          },
          {
            "type": "ObjectExpression",
            "start": 181,
            "end": 200,
            "properties": [
              {
                "type": "Property",
                "start": 187,
                "end": 197,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 189,
                  "name": "cb",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 191,
                  "end": 197,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 214,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 278,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 278,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 244,
              "end": 278,
              "objectType": {
                "type": "TSIntersectionType",
                "start": 245,
                "end": 274,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 245,
                    "end": 258,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 247,
                        "end": 256,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 248,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 248,
                          "end": 256,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 250,
                            "end": 256
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 261,
                    "end": 274,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 263,
                        "end": 272,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 264,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
              "indexType": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 277,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 277,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 280,
          "end": 289,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 281,
            "end": 289,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 283,
              "end": 289
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 291,
        "end": 305,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 297,
            "end": 303,
            "expression": {
              "type": "AssignmentExpression",
              "start": 297,
              "end": 302,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 240,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 220,
            "end": 239,
            "name": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 230,
              "end": 239,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 230,
                  "end": 233,
                  "literal": {
                    "type": "Literal",
                    "start": 230,
                    "end": 233,
                    "value": "a",
                    "raw": "\"a\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 236,
                  "end": 239,
                  "literal": {
                    "type": "Literal",
                    "start": 236,
                    "end": 239,
                    "value": "b",
                    "raw": "\"b\""
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
