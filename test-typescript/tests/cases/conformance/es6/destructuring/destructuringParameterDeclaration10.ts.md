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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 196,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 29,
          "name": "prepareConfig",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 30,
            "end": 170,
            "left": {
              "type": "ObjectPattern",
              "start": 30,
              "end": 165,
              "properties": [
                {
                  "type": "Property",
                  "start": 36,
                  "end": 83,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 51,
                    "name": "additionalFiles",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 53,
                    "end": 83,
                    "left": {
                      "type": "ObjectPattern",
                      "start": 53,
                      "end": 78,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 63,
                          "end": 72,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 67,
                            "name": "json",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 63,
                            "end": 72,
                            "left": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 67,
                              "name": "json",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "start": 70,
                              "end": 72,
                              "elements": []
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 81,
                      "end": 83,
                      "properties": []
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
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
                        "name": "additionalFiles",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "Partial",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "Record",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
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
                "name": "json",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "prepareConfigWithoutAnnotation",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 245,
            "end": 305,
            "left": {
              "type": "ObjectPattern",
              "start": 245,
              "end": 300,
              "properties": [
                {
                  "type": "Property",
                  "start": 251,
                  "end": 298,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 266,
                    "name": "additionalFiles",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 268,
                    "end": 298,
                    "left": {
                      "type": "ObjectPattern",
                      "start": 268,
                      "end": 293,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 278,
                          "end": 287,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 282,
                            "name": "json",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 278,
                            "end": 287,
                            "left": {
                              "type": "Identifier",
                              "start": 278,
                              "end": 282,
                              "name": "json",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "start": 285,
                              "end": 287,
                              "elements": []
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 296,
                      "end": 298,
                      "properties": []
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 303,
              "end": 305,
              "properties": []
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
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
                "name": "json",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 321,
      "end": 559,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 328,
        "end": 559,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 334,
            "end": 559,
            "id": {
              "type": "Identifier",
              "start": 334,
              "end": 466,
              "name": "prepareConfigWithContextualSignature",
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
                      "name": "param",
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
                                "name": "additionalFiles",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                    "name": "Partial",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                                          "name": "Record",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
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
                      },
                      "decorators": [],
                      "optional": false
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
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 469,
              "end": 559,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 470,
                  "end": 530,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 470,
                    "end": 525,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 476,
                        "end": 523,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 491,
                          "name": "additionalFiles",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 493,
                          "end": 523,
                          "left": {
                            "type": "ObjectPattern",
                            "start": 493,
                            "end": 518,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 503,
                                "end": 512,
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 503,
                                  "end": 507,
                                  "name": "json",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "AssignmentPattern",
                                  "start": 503,
                                  "end": 512,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 503,
                                    "end": 507,
                                    "name": "json",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "ArrayExpression",
                                    "start": 510,
                                    "end": 512,
                                    "elements": []
                                  },
                                  "decorators": [],
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ],
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 521,
                            "end": 523,
                            "properties": []
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 528,
                    "end": 530,
                    "properties": []
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
                      "name": "json",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
