__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 560,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 196,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 196,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 172,
          "end": 196,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 178,
              "end": 182,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 178,
                "end": 182,
                "decorators": [],
                "name": "json",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 29,
          "decorators": [],
          "name": "prepareConfig",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 30,
            "end": 170,
            "decorators": [],
            "left": {
              "type": "ObjectPattern",
              "start": 30,
              "end": 165,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 36,
                  "end": 83,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 51,
                    "decorators": [],
                    "name": "additionalFiles",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 53,
                    "end": 83,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 53,
                      "end": 78,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 63,
                          "end": 72,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 67,
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 63,
                            "end": 72,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 67,
                              "decorators": [],
                              "name": "json",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "ArrayExpression",
                              "start": 70,
                              "end": 72,
                              "elements": []
                            },
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "ObjectExpression",
                      "start": 81,
                      "end": 83,
                      "properties": []
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 85,
                "end": 165,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 87,
                  "end": 165,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 91,
                      "end": 163,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 106,
                        "decorators": [],
                        "name": "additionalFiles",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 107,
                        "end": 162,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 109,
                          "end": 162,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 116,
                            "end": 162,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 117,
                                "end": 161,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 123,
                                  "end": 161,
                                  "params": [
                                    {
                                      "type": "TSUnionType",
                                      "start": 124,
                                      "end": 150,
                                      "types": [
                                        {
                                          "type": "TSLiteralType",
                                          "start": 124,
                                          "end": 130,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 124,
                                            "end": 130,
                                            "raw": "\"json\"",
                                            "value": "json"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 133,
                                          "end": 140,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 133,
                                            "end": 140,
                                            "raw": "\"jsonc\"",
                                            "value": "jsonc"
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 143,
                                          "end": 150,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 143,
                                            "end": 150,
                                            "raw": "\"json5\"",
                                            "value": "json5"
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "TSArrayType",
                                      "start": 152,
                                      "end": 160,
                                      "elementType": {
                                        "type": "TSStringKeyword",
                                        "start": 152,
                                        "end": 158
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 117,
                                  "end": 123,
                                  "decorators": [],
                                  "name": "Record",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 116,
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                }
              }
            },
            "optional": false,
            "right": {
              "type": "ObjectExpression",
              "start": 168,
              "end": 170,
              "properties": []
            },
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 198,
      "end": 319,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 205,
        "end": 319,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 307,
          "end": 319,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 313,
              "end": 317,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 313,
                "end": 317,
                "decorators": [],
                "name": "json",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 214,
          "end": 244,
          "decorators": [],
          "name": "prepareConfigWithoutAnnotation",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 245,
            "end": 305,
            "decorators": [],
            "left": {
              "type": "ObjectPattern",
              "start": 245,
              "end": 300,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 251,
                  "end": 298,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 266,
                    "decorators": [],
                    "name": "additionalFiles",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 268,
                    "end": 298,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 268,
                      "end": 293,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 278,
                          "end": 287,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 282,
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 278,
                            "end": 287,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 278,
                              "end": 282,
                              "decorators": [],
                              "name": "json",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "ArrayExpression",
                              "start": 285,
                              "end": 287,
                              "elements": []
                            },
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "ObjectExpression",
                      "start": 296,
                      "end": 298,
                      "properties": []
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "ObjectExpression",
              "start": 303,
              "end": 305,
              "properties": []
            },
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 321,
      "end": 559,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 328,
        "end": 559,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 334,
            "end": 559,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 334,
              "end": 466,
              "decorators": [],
              "name": "prepareConfigWithContextualSignature",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 370,
                "end": 466,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 372,
                  "end": 466,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 373,
                      "end": 457,
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 378,
                        "end": 457,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 379,
                          "end": 457,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 383,
                              "end": 455,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 383,
                                "end": 398,
                                "decorators": [],
                                "name": "additionalFiles",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": true,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 399,
                                "end": 454,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 401,
                                  "end": 454,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 408,
                                    "end": 454,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 409,
                                        "end": 453,
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 415,
                                          "end": 453,
                                          "params": [
                                            {
                                              "type": "TSUnionType",
                                              "start": 416,
                                              "end": 442,
                                              "types": [
                                                {
                                                  "type": "TSLiteralType",
                                                  "start": 416,
                                                  "end": 422,
                                                  "literal": {
                                                    "type": "Literal",
                                                    "start": 416,
                                                    "end": 422,
                                                    "raw": "\"json\"",
                                                    "value": "json"
                                                  }
                                                },
                                                {
                                                  "type": "TSLiteralType",
                                                  "start": 425,
                                                  "end": 432,
                                                  "literal": {
                                                    "type": "Literal",
                                                    "start": 425,
                                                    "end": 432,
                                                    "raw": "\"jsonc\"",
                                                    "value": "jsonc"
                                                  }
                                                },
                                                {
                                                  "type": "TSLiteralType",
                                                  "start": 435,
                                                  "end": 442,
                                                  "literal": {
                                                    "type": "Literal",
                                                    "start": 435,
                                                    "end": 442,
                                                    "raw": "\"json5\"",
                                                    "value": "json5"
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "TSArrayType",
                                              "start": 444,
                                              "end": 452,
                                              "elementType": {
                                                "type": "TSStringKeyword",
                                                "start": 444,
                                                "end": 450
                                              }
                                            }
                                          ]
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 409,
                                          "end": 415,
                                          "decorators": [],
                                          "name": "Record",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 401,
                                    "end": 408,
                                    "decorators": [],
                                    "name": "Partial",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 459,
                    "end": 466,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 462,
                      "end": 466
                    }
                  },
                  "typeParameters": null
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 469,
              "end": 559,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 535,
                "end": 559,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 541,
                    "end": 545,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 541,
                      "end": 545,
                      "decorators": [],
                      "name": "json",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 470,
                  "end": 530,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 470,
                    "end": 525,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 476,
                        "end": 523,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 491,
                          "decorators": [],
                          "name": "additionalFiles",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 493,
                          "end": 523,
                          "decorators": [],
                          "left": {
                            "type": "ObjectPattern",
                            "start": 493,
                            "end": 518,
                            "decorators": [],
                            "optional": false,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 503,
                                "end": 512,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 503,
                                  "end": 507,
                                  "decorators": [],
                                  "name": "json",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": true,
                                "value": {
                                  "type": "AssignmentPattern",
                                  "start": 503,
                                  "end": 512,
                                  "decorators": [],
                                  "left": {
                                    "type": "Identifier",
                                    "start": 503,
                                    "end": 507,
                                    "decorators": [],
                                    "name": "json",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "right": {
                                    "type": "ArrayExpression",
                                    "start": 510,
                                    "end": 512,
                                    "elements": []
                                  },
                                  "typeAnnotation": null
                                }
                              }
                            ],
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "right": {
                            "type": "ObjectExpression",
                            "start": 521,
                            "end": 523,
                            "properties": []
                          },
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 528,
                    "end": 530,
                    "properties": []
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
