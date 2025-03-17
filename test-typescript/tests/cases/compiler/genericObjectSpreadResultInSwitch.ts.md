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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "name": "Params",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 23,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  }
                },
                "accessibility": null,
                "static": false
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 43,
                      "name": "tag",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "value": "a",
                          "raw": "'a'"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 50,
                    "end": 62,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 54,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 54,
                      "end": 62,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 56,
                        "end": 62
                      }
                    },
                    "accessibility": null,
                    "static": false
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 72,
                      "name": "tag",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "value": "b",
                          "raw": "'b'"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 79,
                    "end": 91,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 83,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 83,
                      "end": 91,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 85,
                        "end": 91
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            ]
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 110,
            "name": "getType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 113,
            "end": 241,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 132,
                "end": 141,
                "name": "params",
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
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "id": {
                        "type": "ObjectPattern",
                        "start": 158,
                        "end": 211,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 184,
                            "end": 187,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 187,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 187,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "RestElement",
                            "start": 198,
                            "end": 205,
                            "argument": {
                              "type": "Identifier",
                              "start": 201,
                              "end": 205,
                              "name": "rest",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 220,
                        "name": "params",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 227,
                  "end": 239,
                  "argument": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 238,
                    "name": "rest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 113,
              "end": 131,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 114,
                  "end": 130,
                  "name": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 124,
                    "end": 130,
                    "typeName": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 130,
                      "name": "Params",
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 272,
            "name": "params",
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
                  "name": "Params",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "SwitchStatement",
      "start": 275,
      "end": 586,
      "discriminant": {
        "type": "MemberExpression",
        "start": 283,
        "end": 293,
        "object": {
          "type": "Identifier",
          "start": 283,
          "end": 289,
          "name": "params",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 290,
          "end": 293,
          "name": "tag",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
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
                      "id": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 394,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 397,
                        "end": 417,
                        "object": {
                          "type": "CallExpression",
                          "start": 397,
                          "end": 412,
                          "callee": {
                            "type": "Identifier",
                            "start": 397,
                            "end": 404,
                            "name": "getType",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 405,
                              "end": 411,
                              "name": "params",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 413,
                          "end": 417,
                          "name": "type",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
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
            "value": "a",
            "raw": "'a'"
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
                      "id": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 538,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 541,
                        "end": 561,
                        "object": {
                          "type": "CallExpression",
                          "start": 541,
                          "end": 556,
                          "callee": {
                            "type": "Identifier",
                            "start": 541,
                            "end": 548,
                            "name": "getType",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 549,
                              "end": 555,
                              "name": "params",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 557,
                          "end": 561,
                          "name": "type",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
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
            "value": "b",
            "raw": "'b'"
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
