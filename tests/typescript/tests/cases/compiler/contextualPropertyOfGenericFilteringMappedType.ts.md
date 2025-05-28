__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 585,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 30,
              "end": 36
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
          "start": 41,
          "end": 48,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 48,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 47,
              "end": 48,
              "typeName": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
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
          "start": 52,
          "end": 117,
          "decorators": [],
          "name": "handlers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 117,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 62,
              "end": 117,
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 70,
                "end": 77,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 76,
                  "end": 77,
                  "typeName": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 82,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 85,
                "end": 115,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 86,
                    "end": 97,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 91,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 93,
                        "end": 97,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 93,
                          "end": 94,
                          "typeName": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 94,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 95,
                          "end": 96,
                          "typeName": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 99,
                    "end": 106,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 105,
                        "end": 106,
                        "typeName": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 106,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 108,
                  "end": 115,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 111,
                    "end": 115
                  }
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 126,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 122,
          "end": 126
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 236,
      "expression": {
        "type": "CallExpression",
        "start": 129,
        "end": 235,
        "callee": {
          "type": "Identifier",
          "start": 129,
          "end": 131,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 135,
            "end": 165,
            "properties": [
              {
                "type": "Property",
                "start": 141,
                "end": 147,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 146,
                  "end": 147,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 153,
                "end": 160,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 156,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 158,
                  "end": 160,
                  "value": "",
                  "raw": "\"\""
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
            "start": 169,
            "end": 232,
            "properties": [
              {
                "type": "Property",
                "start": 175,
                "end": 198,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 178,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 180,
                  "end": 198,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 181,
                      "end": 186,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 188,
                      "end": 191,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 196,
                    "end": 198,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 204,
                "end": 227,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 207,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 209,
                  "end": 227,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 210,
                      "end": 215,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 217,
                      "end": 220,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 225,
                    "end": 227,
                    "body": []
                  },
                  "id": null,
                  "generator": false
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
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 238,
      "end": 395,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 257,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 257,
        "end": 275,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 258,
            "end": 274,
            "name": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 268,
              "end": 274
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
          "start": 279,
          "end": 286,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 283,
            "end": 286,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 285,
              "end": 286,
              "typeName": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
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
          "start": 290,
          "end": 385,
          "decorators": [],
          "name": "handlers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 298,
            "end": 385,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 300,
              "end": 385,
              "key": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 308,
                "end": 315,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 314,
                  "end": 315,
                  "typeName": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": {
                "type": "TSConditionalType",
                "start": 319,
                "end": 350,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 319,
                  "end": 323,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 319,
                    "end": 320,
                    "typeName": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 320,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 321,
                    "end": 322,
                    "typeName": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 322,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 332,
                  "end": 338
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 341,
                  "end": 342,
                  "typeName": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 345,
                  "end": 350
                }
              },
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 353,
                "end": 383,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 354,
                    "end": 365,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 359,
                      "end": 365,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 361,
                        "end": 365,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 361,
                          "end": 362,
                          "typeName": {
                            "type": "Identifier",
                            "start": 361,
                            "end": 362,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 363,
                          "end": 364,
                          "typeName": {
                            "type": "Identifier",
                            "start": 363,
                            "end": 364,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 367,
                    "end": 374,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 371,
                      "end": 374,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 373,
                        "end": 374,
                        "typeName": {
                          "type": "Identifier",
                          "start": 373,
                          "end": 374,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 376,
                  "end": 383,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 379,
                    "end": 383
                  }
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 388,
        "end": 394,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 390,
          "end": 394
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 397,
      "end": 475,
      "expression": {
        "type": "CallExpression",
        "start": 397,
        "end": 474,
        "callee": {
          "type": "Identifier",
          "start": 397,
          "end": 399,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 403,
            "end": 433,
            "properties": [
              {
                "type": "Property",
                "start": 409,
                "end": 415,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 412,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 414,
                  "end": 415,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 421,
                "end": 428,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 424,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 426,
                  "end": 428,
                  "value": "",
                  "raw": "\"\""
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
            "start": 437,
            "end": 471,
            "properties": [
              {
                "type": "Property",
                "start": 443,
                "end": 466,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 446,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 448,
                  "end": 466,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 449,
                      "end": 454,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 456,
                      "end": 459,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 464,
                    "end": 466,
                    "body": []
                  },
                  "id": null,
                  "generator": false
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 477,
      "end": 585,
      "expression": {
        "type": "CallExpression",
        "start": 477,
        "end": 584,
        "callee": {
          "type": "Identifier",
          "start": 477,
          "end": 479,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 483,
            "end": 513,
            "properties": [
              {
                "type": "Property",
                "start": 489,
                "end": 495,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 492,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 494,
                  "end": 495,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 501,
                "end": 508,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 504,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 506,
                  "end": 508,
                  "value": "",
                  "raw": "\"\""
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
            "start": 517,
            "end": 581,
            "properties": [
              {
                "type": "Property",
                "start": 523,
                "end": 576,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 526,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 528,
                  "end": 576,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 529,
                      "end": 534,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 536,
                      "end": 539,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 544,
                    "end": 576,
                    "body": []
                  },
                  "id": null,
                  "generator": false
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
