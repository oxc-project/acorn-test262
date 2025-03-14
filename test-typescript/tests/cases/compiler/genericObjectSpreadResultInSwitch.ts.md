__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 586,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 95,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Params",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 14,
        "end": 94,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 14,
            "end": 34,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 20,
                "end": 32,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 23,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 38,
            "end": 93,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 38,
                "end": 64,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 40,
                    "end": 49,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 43,
                      "decorators": [],
                      "name": "tag",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 45,
                        "end": 48,
                        "literal": {
                          "type": "Literal",
                          "start": 45,
                          "end": 48,
                          "raw": "'a'",
                          "value": "a"
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 50,
                    "end": 62,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 54,
                      "decorators": [],
                      "name": "type",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 54,
                      "end": 62,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 56,
                        "end": 62
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeLiteral",
                "start": 67,
                "end": 93,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 69,
                    "end": 78,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 72,
                      "decorators": [],
                      "name": "tag",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 74,
                        "end": 77,
                        "literal": {
                          "type": "Literal",
                          "start": 74,
                          "end": 77,
                          "raw": "'b'",
                          "value": "b"
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 79,
                    "end": 91,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 83,
                      "decorators": [],
                      "name": "type",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 83,
                      "end": 91,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 85,
                        "end": 91
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 110,
            "decorators": [],
            "name": "getType",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 113,
            "end": 241,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 146,
              "end": 241,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 152,
                  "end": 221,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 158,
                      "end": 220,
                      "definite": false,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 158,
                        "end": 211,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 184,
                            "end": 187,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 187,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 187,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 198,
                            "end": 205,
                            "argument": {
                              "type": "Identifier",
                              "start": 201,
                              "end": 205,
                              "decorators": [],
                              "name": "rest",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 220,
                        "decorators": [],
                        "name": "params",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 227,
                  "end": 239,
                  "argument": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 238,
                    "decorators": [],
                    "name": "rest",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 132,
                "end": 141,
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 138,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 140,
                    "end": 141,
                    "typeName": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 113,
              "end": 131,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 114,
                  "end": 130,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 124,
                    "end": 130,
                    "typeName": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 130,
                      "decorators": [],
                      "name": "Params",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 272,
            "decorators": [],
            "name": "params",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 272,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 266,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 272,
                  "decorators": [],
                  "name": "Params",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "SwitchStatement",
      "start": 275,
      "end": 586,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 301,
          "end": 440,
          "consequent": [
            {
              "type": "BlockStatement",
              "start": 311,
              "end": 440,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 382,
                  "end": 418,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 388,
                      "end": 417,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 394,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 397,
                        "end": 417,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 397,
                          "end": 412,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 405,
                              "end": 411,
                              "decorators": [],
                              "name": "params",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 397,
                            "end": 404,
                            "decorators": [],
                            "name": "getType",
                            "optional": false
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 413,
                          "end": 417,
                          "decorators": [],
                          "name": "type",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "BreakStatement",
                  "start": 428,
                  "end": 434,
                  "label": null
                }
              ]
            }
          ],
          "test": {
            "type": "Literal",
            "start": 306,
            "end": 309,
            "raw": "'a'",
            "value": "a"
          }
        },
        {
          "type": "SwitchCase",
          "start": 445,
          "end": 584,
          "consequent": [
            {
              "type": "BlockStatement",
              "start": 455,
              "end": 584,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 526,
                  "end": 562,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 532,
                      "end": 561,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 538,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 541,
                        "end": 561,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 541,
                          "end": 556,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 549,
                              "end": 555,
                              "decorators": [],
                              "name": "params",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 541,
                            "end": 548,
                            "decorators": [],
                            "name": "getType",
                            "optional": false
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 557,
                          "end": 561,
                          "decorators": [],
                          "name": "type",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "BreakStatement",
                  "start": 572,
                  "end": 578,
                  "label": null
                }
              ]
            }
          ],
          "test": {
            "type": "Literal",
            "start": 450,
            "end": 453,
            "raw": "'b'",
            "value": "b"
          }
        }
      ],
      "discriminant": {
        "type": "MemberExpression",
        "start": 283,
        "end": 293,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 283,
          "end": 289,
          "decorators": [],
          "name": "params",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 290,
          "end": 293,
          "decorators": [],
          "name": "tag",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
