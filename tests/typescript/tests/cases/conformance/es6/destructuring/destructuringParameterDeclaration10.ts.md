__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 559,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 196,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 196,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 29,
          "decorators": [],
          "name": "prepareConfig",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
              "properties": [
                {
                  "type": "Property",
                  "start": 36,
                  "end": 83,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 51,
                    "decorators": [],
                    "name": "additionalFiles",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                      "properties": [
                        {
                          "type": "Property",
                          "start": 63,
                          "end": 72,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 67,
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                            "right": {
                              "type": "ArrayExpression",
                              "start": 70,
                              "end": 72,
                              "elements": []
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 81,
                      "end": 83,
                      "properties": []
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
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
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 106,
                        "decorators": [],
                        "name": "additionalFiles",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 107,
                        "end": 162,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 109,
                          "end": 162,
                          "typeName": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 116,
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 116,
                            "end": 162,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 117,
                                "end": 161,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 117,
                                  "end": 123,
                                  "decorators": [],
                                  "name": "Record",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
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
                                            "value": "json",
                                            "raw": "\"json\""
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
                                            "value": "jsonc",
                                            "raw": "\"jsonc\""
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
                                            "value": "json5",
                                            "raw": "\"json5\""
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
                                }
                              }
                            ]
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "right": {
              "type": "ObjectExpression",
              "start": 168,
              "end": 170,
              "properties": []
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 172,
          "end": 196,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 178,
              "end": 182,
              "expression": {
                "type": "Identifier",
                "start": 178,
                "end": 182,
                "decorators": [],
                "name": "json",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 198,
      "end": 319,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 205,
        "end": 319,
        "id": {
          "type": "Identifier",
          "start": 214,
          "end": 244,
          "decorators": [],
          "name": "prepareConfigWithoutAnnotation",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
              "properties": [
                {
                  "type": "Property",
                  "start": 251,
                  "end": 298,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 266,
                    "decorators": [],
                    "name": "additionalFiles",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                      "properties": [
                        {
                          "type": "Property",
                          "start": 278,
                          "end": 287,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 282,
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                            "right": {
                              "type": "ArrayExpression",
                              "start": 285,
                              "end": 287,
                              "elements": []
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 296,
                      "end": 298,
                      "properties": []
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 303,
              "end": 305,
              "properties": []
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 307,
          "end": 319,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 313,
              "end": 317,
              "expression": {
                "type": "Identifier",
                "start": 313,
                "end": 317,
                "decorators": [],
                "name": "json",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 321,
      "end": 559,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 328,
        "end": 559,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 334,
            "end": 559,
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
                  "typeParameters": null,
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
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 383,
                                "end": 398,
                                "decorators": [],
                                "name": "additionalFiles",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 399,
                                "end": 454,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 401,
                                  "end": 454,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 401,
                                    "end": 408,
                                    "decorators": [],
                                    "name": "Partial",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 408,
                                    "end": 454,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 409,
                                        "end": 453,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 409,
                                          "end": 415,
                                          "decorators": [],
                                          "name": "Record",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
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
                                                    "value": "json",
                                                    "raw": "\"json\""
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
                                                    "value": "jsonc",
                                                    "raw": "\"jsonc\""
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
                                                    "value": "json5",
                                                    "raw": "\"json5\""
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
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
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
                  }
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 469,
              "end": 559,
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                    "properties": [
                      {
                        "type": "Property",
                        "start": 476,
                        "end": 523,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 491,
                          "decorators": [],
                          "name": "additionalFiles",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                            "properties": [
                              {
                                "type": "Property",
                                "start": 503,
                                "end": 512,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 503,
                                  "end": 507,
                                  "decorators": [],
                                  "name": "json",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
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
                                  "right": {
                                    "type": "ArrayExpression",
                                    "start": 510,
                                    "end": 512,
                                    "elements": []
                                  },
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 521,
                            "end": 523,
                            "properties": []
                          },
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 528,
                    "end": 530,
                    "properties": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 535,
                "end": 559,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 541,
                    "end": 545,
                    "expression": {
                      "type": "Identifier",
                      "start": 541,
                      "end": 545,
                      "decorators": [],
                      "name": "json",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
