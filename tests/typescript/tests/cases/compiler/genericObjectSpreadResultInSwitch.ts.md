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
        "decorators": [],
        "name": "Params",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "tag",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "tag",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 110,
            "decorators": [],
            "name": "getType",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 113,
            "end": 241,
            "expression": false,
            "async": false,
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
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 146,
              "end": 241,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 152,
                  "end": 221,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 158,
                      "end": 220,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 158,
                        "end": 211,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 184,
                            "end": 187,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 187,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 187,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "RestElement",
                            "start": 198,
                            "end": 205,
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "start": 201,
                              "end": 205,
                              "decorators": [],
                              "name": "rest",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 220,
                        "decorators": [],
                        "name": "params",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
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
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 273,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 272,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "decorators": [],
          "name": "params",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 290,
          "end": 293,
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 301,
          "end": 440,
          "test": {
            "type": "Literal",
            "start": 306,
            "end": 309,
            "value": "a",
            "raw": "'a'"
          },
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 388,
                      "end": 417,
                      "id": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 394,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "getType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 405,
                              "end": 411,
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 413,
                          "end": 417,
                          "decorators": [],
                          "name": "type",
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
                  "type": "BreakStatement",
                  "start": 428,
                  "end": 434,
                  "label": null
                }
              ]
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 445,
          "end": 584,
          "test": {
            "type": "Literal",
            "start": 450,
            "end": 453,
            "value": "b",
            "raw": "'b'"
          },
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 532,
                      "end": 561,
                      "id": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 538,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "getType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 549,
                              "end": 555,
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 557,
                          "end": 561,
                          "decorators": [],
                          "name": "type",
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
                  "type": "BreakStatement",
                  "start": 572,
                  "end": 578,
                  "label": null
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
