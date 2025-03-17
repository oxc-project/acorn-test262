__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 586,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 41,
          "end": 48,
          "name": "data",
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
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 52,
          "end": 117,
          "name": "handlers",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 117,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 62,
              "end": 117,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 65,
                "end": 77,
                "name": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 82,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "value",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 99,
                    "end": 106,
                    "name": "prop",
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
              "optional": null,
              "readonly": null,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 126,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 122,
          "end": 126
        }
      }
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
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 146,
                  "end": 147,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 153,
                "end": 160,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 156,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 158,
                  "end": 160,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 178,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 180,
                  "end": 198,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 181,
                      "end": 186,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 188,
                      "end": 191,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 196,
                    "end": 198,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 204,
                "end": 227,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 207,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 209,
                  "end": 227,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 210,
                      "end": 215,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 217,
                      "end": 220,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 225,
                    "end": 227,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 279,
          "end": 286,
          "name": "data",
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
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 290,
          "end": 385,
          "name": "handlers",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 298,
            "end": 385,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 300,
              "end": 385,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 303,
                "end": 315,
                "name": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 304,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "value",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 367,
                    "end": 374,
                    "name": "prop",
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
              "optional": null,
              "readonly": null,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 388,
        "end": 394,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 390,
          "end": 394
        }
      }
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
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 412,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 414,
                  "end": 415,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 421,
                "end": 428,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 424,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 426,
                  "end": 428,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 446,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 448,
                  "end": 466,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 449,
                      "end": 454,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 456,
                      "end": 459,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 464,
                    "end": 466,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 492,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 494,
                  "end": 495,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 501,
                "end": 508,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 504,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 506,
                  "end": 508,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 526,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 528,
                  "end": 576,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 529,
                      "end": 534,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 536,
                      "end": 539,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 544,
                    "end": 576,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
