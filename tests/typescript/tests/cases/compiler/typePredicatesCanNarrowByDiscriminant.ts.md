__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 444,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 89,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 89,
            "decorators": [],
            "name": "fruit",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 89,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 31,
                "end": 89,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 31,
                    "end": 47,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 33,
                        "end": 46,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 33,
                          "end": 37,
                          "decorators": [],
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 37,
                          "end": 46,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 39,
                            "end": 46,
                            "literal": {
                              "type": "Literal",
                              "start": 39,
                              "end": 46,
                              "value": "apple",
                              "raw": "'apple'"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 50,
                    "end": 68,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 52,
                        "end": 66,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 52,
                          "end": 56,
                          "decorators": [],
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 56,
                          "end": 66,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 58,
                            "end": 66,
                            "literal": {
                              "type": "Literal",
                              "start": 58,
                              "end": 66,
                              "value": "banana",
                              "raw": "'banana'"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 71,
                    "end": 89,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 73,
                        "end": 87,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 77,
                          "decorators": [],
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 77,
                          "end": 87,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 79,
                            "end": 87,
                            "literal": {
                              "type": "Literal",
                              "start": 79,
                              "end": 87,
                              "value": "cherry",
                              "raw": "'cherry'"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 91,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 115,
        "decorators": [],
        "name": "isOneOf",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 117,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 130,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 129,
              "end": 130,
              "typeName": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 132,
          "end": 139,
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 139,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 141,
          "end": 160,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 160,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 148,
              "end": 160,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 157,
                "end": 160,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 157,
                  "end": 158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 161,
        "end": 172,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 163,
          "end": 172,
          "parameterName": {
            "type": "Identifier",
            "start": 163,
            "end": 167,
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 171,
            "end": 172,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 171,
              "end": 172,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "IfStatement",
      "start": 173,
      "end": 256,
      "test": {
        "type": "CallExpression",
        "start": 177,
        "end": 226,
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 184,
          "decorators": [],
          "name": "isOneOf",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 185,
            "end": 195,
            "object": {
              "type": "Identifier",
              "start": 185,
              "end": 190,
              "decorators": [],
              "name": "fruit",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 191,
              "end": 195,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "TSAsExpression",
            "start": 197,
            "end": 225,
            "expression": {
              "type": "ArrayExpression",
              "start": 197,
              "end": 216,
              "elements": [
                {
                  "type": "Literal",
                  "start": 198,
                  "end": 205,
                  "value": "apple",
                  "raw": "'apple'"
                },
                {
                  "type": "Literal",
                  "start": 207,
                  "end": 215,
                  "value": "banana",
                  "raw": "'banana'"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 220,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 220,
                "end": 225,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 228,
        "end": 256,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 234,
            "end": 244,
            "expression": {
              "type": "MemberExpression",
              "start": 234,
              "end": 244,
              "object": {
                "type": "Identifier",
                "start": 234,
                "end": 239,
                "decorators": [],
                "name": "fruit",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 240,
                "end": 244,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 249,
            "end": 254,
            "expression": {
              "type": "Identifier",
              "start": 249,
              "end": 254,
              "decorators": [],
              "name": "fruit",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 338,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 338,
            "decorators": [],
            "name": "fruit2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 338,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 280,
                "end": 338,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 280,
                    "end": 296,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 282,
                        "end": 295,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 282,
                          "end": 286,
                          "decorators": [],
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 286,
                          "end": 295,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 288,
                            "end": 295,
                            "literal": {
                              "type": "Literal",
                              "start": 288,
                              "end": 295,
                              "value": "apple",
                              "raw": "'apple'"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 299,
                    "end": 317,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 301,
                        "end": 315,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 305,
                          "decorators": [],
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 305,
                          "end": 315,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 307,
                            "end": 315,
                            "literal": {
                              "type": "Literal",
                              "start": 307,
                              "end": 315,
                              "value": "banana",
                              "raw": "'banana'"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 320,
                    "end": 338,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 322,
                        "end": 336,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 326,
                          "decorators": [],
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 326,
                          "end": 336,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 328,
                            "end": 336,
                            "literal": {
                              "type": "Literal",
                              "start": 328,
                              "end": 336,
                              "value": "cherry",
                              "raw": "'cherry'"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 364,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 363,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 349,
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 352,
            "end": 363,
            "object": {
              "type": "Identifier",
              "start": 352,
              "end": 358,
              "decorators": [],
              "name": "fruit2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 359,
              "end": 363,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 365,
      "end": 444,
      "test": {
        "type": "CallExpression",
        "start": 369,
        "end": 412,
        "callee": {
          "type": "Identifier",
          "start": 369,
          "end": 376,
          "decorators": [],
          "name": "isOneOf",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 377,
            "end": 381,
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "TSAsExpression",
            "start": 383,
            "end": 411,
            "expression": {
              "type": "ArrayExpression",
              "start": 383,
              "end": 402,
              "elements": [
                {
                  "type": "Literal",
                  "start": 384,
                  "end": 391,
                  "value": "apple",
                  "raw": "'apple'"
                },
                {
                  "type": "Literal",
                  "start": 393,
                  "end": 401,
                  "value": "banana",
                  "raw": "'banana'"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 406,
              "end": 411,
              "typeName": {
                "type": "Identifier",
                "start": 406,
                "end": 411,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 414,
        "end": 444,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 420,
            "end": 431,
            "expression": {
              "type": "MemberExpression",
              "start": 420,
              "end": 431,
              "object": {
                "type": "Identifier",
                "start": 420,
                "end": 426,
                "decorators": [],
                "name": "fruit2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 427,
                "end": 431,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 436,
            "end": 442,
            "expression": {
              "type": "Identifier",
              "start": 436,
              "end": 442,
              "decorators": [],
              "name": "fruit2",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
