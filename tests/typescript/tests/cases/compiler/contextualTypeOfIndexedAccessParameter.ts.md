__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 305,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 22,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "\"a\"",
              "value": "a"
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
              "raw": "\"b\"",
              "value": "b"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 94,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 42,
        "decorators": [],
        "name": "OptionsForKey",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 52,
                          "end": 54,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 54,
                          "end": 77,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 56,
                            "end": 77,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 57,
                                "end": 66,
                                "decorators": [],
                                "name": "p",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 58,
                                  "end": 66,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 60,
                                    "end": 66
                                  }
                                }
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
                            },
                            "typeParameters": null
                          }
                        }
                      }
                    ]
                  }
                }
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 96,
      "end": 172,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 137,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 137,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 136,
              "end": 137,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 139,
          "end": 164,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 164,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 148,
              "end": 164,
              "indexType": {
                "type": "TSTypeReference",
                "start": 162,
                "end": 163,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 161,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 161,
                  "decorators": [],
                  "name": "OptionsForKey",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 165,
        "end": 171,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 167,
          "end": 171
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 129,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 129,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 129,
                "decorators": [],
                "name": "Keys",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 202,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 174,
        "end": 201,
        "arguments": [
          {
            "type": "Literal",
            "start": 176,
            "end": 179,
            "raw": "\"a\"",
            "value": "a"
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 189,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 191,
                  "end": 197,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 174,
          "end": 175,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 305,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 291,
        "end": 305,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 297,
            "end": 303,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 297,
              "end": 302,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 214,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 278,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 278,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 244,
              "end": 278,
              "indexType": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 277,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 277,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
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
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 248,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 248,
                          "end": 256,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 250,
                            "end": 256
                          }
                        }
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
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 264,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
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
        },
        {
          "type": "Identifier",
          "start": 280,
          "end": 289,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 281,
            "end": 289,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 283,
              "end": 289
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 240,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 220,
            "end": 239,
            "const": false,
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
                    "raw": "\"a\"",
                    "value": "a"
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
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
