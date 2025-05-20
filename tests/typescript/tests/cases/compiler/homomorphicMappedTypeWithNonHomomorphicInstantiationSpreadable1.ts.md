__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 677,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 78,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 18,
        "decorators": [],
        "name": "HandleOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 24,
        "end": 77,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 36,
          "end": 43,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 42,
            "end": 43,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 46,
          "end": 74,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 56,
              "end": 68,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 56,
                "end": 61,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 63,
                  "end": 67,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 65,
                    "end": 66,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 63,
                    "end": 64,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 80,
      "end": 268,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 102,
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 157,
          "end": 263,
          "decorators": [],
          "name": "fields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 163,
            "end": 263,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 165,
              "end": 263,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 177,
                "end": 184,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 183,
                  "end": 184,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": false,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 187,
                "end": 260,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 197,
                    "end": 211,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 202,
                      "decorators": [],
                      "name": "label",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 202,
                      "end": 210,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 204,
                        "end": 210
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 220,
                    "end": 254,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 227,
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 227,
                      "end": 253,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 229,
                        "end": 253,
                        "elementTypes": [
                          {
                            "type": "TSRestType",
                            "start": 230,
                            "end": 252,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 233,
                              "end": 252,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 246,
                                "end": 252,
                                "params": [
                                  {
                                    "type": "TSIndexedAccessType",
                                    "start": 247,
                                    "end": 251,
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "start": 249,
                                      "end": 250,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 249,
                                        "end": 250,
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "objectType": {
                                      "type": "TSTypeReference",
                                      "start": 247,
                                      "end": 248,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 247,
                                        "end": 248,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 233,
                                "end": 246,
                                "decorators": [],
                                "name": "HandleOptions",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 264,
        "end": 267,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 266,
          "end": 267,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 102,
        "end": 156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 153,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 153,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 124,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 125,
                    "end": 136,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 136,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 138,
                    "end": 152,
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 147,
                      "end": 152,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 147,
                        "end": 150
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 124,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 677,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 676,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 282,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 676,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 291,
                "end": 675,
                "properties": [
                  {
                    "type": "Property",
                    "start": 297,
                    "end": 480,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 301,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 303,
                      "end": 480,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 313,
                          "end": 327,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 318,
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 320,
                            "end": 327,
                            "raw": "\"first\"",
                            "value": "first"
                          }
                        },
                        {
                          "type": "Property",
                          "start": 337,
                          "end": 473,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 337,
                            "end": 344,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "start": 346,
                            "end": 473,
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "start": 360,
                                "end": 403,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 378,
                                    "end": 388,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 378,
                                      "end": 383,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 385,
                                      "end": 388,
                                      "raw": "123",
                                      "value": 123
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "ObjectExpression",
                                "start": 417,
                                "end": 462,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 435,
                                    "end": 447,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 435,
                                      "end": 440,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 442,
                                      "end": 447,
                                      "raw": "\"foo\"",
                                      "value": "foo"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 486,
                    "end": 672,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 491,
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 493,
                      "end": 672,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 503,
                          "end": 518,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 503,
                            "end": 508,
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 510,
                            "end": 518,
                            "raw": "\"second\"",
                            "value": "second"
                          }
                        },
                        {
                          "type": "Property",
                          "start": 528,
                          "end": 665,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 528,
                            "end": 535,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "start": 537,
                            "end": 665,
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "start": 551,
                                "end": 596,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 569,
                                    "end": 581,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 569,
                                      "end": 574,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 576,
                                      "end": 581,
                                      "raw": "\"bar\"",
                                      "value": "bar"
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "ObjectExpression",
                                "start": 610,
                                "end": 654,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 628,
                                    "end": 639,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 628,
                                      "end": 633,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 635,
                                      "end": 639,
                                      "raw": "true",
                                      "value": true
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "decorators": [],
              "name": "func1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
