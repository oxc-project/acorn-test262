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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 18,
        "decorators": [],
        "name": "HandleOptions",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 24,
        "end": 77,
        "key": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 36,
          "end": 43,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 42,
            "end": 43,
            "typeName": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 46,
          "end": 74,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 56,
              "end": 68,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 56,
                "end": 61,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 63,
                  "end": 67,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 63,
                    "end": 64,
                    "typeName": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 65,
                    "end": 66,
                    "typeName": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 80,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 102,
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 102,
        "end": 156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 153,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 124,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 124,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 125,
                    "end": 136,
                    "typeName": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 136,
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
              }
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
              "key": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 177,
                "end": 184,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 183,
                  "end": 184,
                  "typeName": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 187,
                "end": 260,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 197,
                    "end": 211,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 202,
                      "decorators": [],
                      "name": "label",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 202,
                      "end": 210,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 204,
                        "end": 210
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 220,
                    "end": 254,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 227,
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 233,
                                "end": 246,
                                "decorators": [],
                                "name": "HandleOptions",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 246,
                                "end": 252,
                                "params": [
                                  {
                                    "type": "TSIndexedAccessType",
                                    "start": 247,
                                    "end": 251,
                                    "objectType": {
                                      "type": "TSTypeReference",
                                      "start": 247,
                                      "end": 248,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 247,
                                        "end": 248,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "start": 249,
                                      "end": 250,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 249,
                                        "end": 250,
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "optional": false,
              "readonly": null
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
          "typeName": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 677,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 676,
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
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "decorators": [],
              "name": "func1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 301,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 303,
                      "end": 480,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 313,
                          "end": 327,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 318,
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 320,
                            "end": 327,
                            "value": "first",
                            "raw": "\"first\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 337,
                          "end": 473,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 337,
                            "end": 344,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 378,
                                      "end": 383,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 385,
                                      "end": 388,
                                      "value": 123,
                                      "raw": "123"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
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
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 435,
                                      "end": 440,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 442,
                                      "end": 447,
                                      "value": "foo",
                                      "raw": "\"foo\""
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              }
                            ]
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 486,
                    "end": 672,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 491,
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 493,
                      "end": 672,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 503,
                          "end": 518,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 503,
                            "end": 508,
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 510,
                            "end": 518,
                            "value": "second",
                            "raw": "\"second\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 528,
                          "end": 665,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 528,
                            "end": 535,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 569,
                                      "end": 574,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 576,
                                      "end": 581,
                                      "value": "bar",
                                      "raw": "\"bar\""
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
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
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 628,
                                      "end": 633,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 635,
                                      "end": 639,
                                      "value": true,
                                      "raw": "true"
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false
                                  }
                                ]
                              }
                            ]
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
