destructureOptionalParameter.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 534,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 63,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 20,
          "end": 55,
          "decorators": [],
          "optional": true,
          "properties": [
            {
              "type": "Property",
              "start": 22,
              "end": 23,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 25,
              "end": 26,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 55,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 31,
              "end": 55,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 33,
                  "end": 43,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 36,
                      "end": 42
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 44,
                  "end": 53,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 47,
                      "end": 53
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
        "start": 56,
        "end": 62,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 58,
          "end": 62
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 65,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 147,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 136,
            "end": 138,
            "expression": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 143,
            "end": 145,
            "expression": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 77,
          "end": 128,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 77,
            "end": 111,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 79,
                "end": 80,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 82,
                "end": 83,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 87,
                "end": 111,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 89,
                    "end": 99,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 92,
                        "end": 98
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 100,
                    "end": 109,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 101,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 109,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 103,
                        "end": 109
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
            "start": 114,
            "end": 128,
            "properties": [
              {
                "type": "Property",
                "start": 116,
                "end": 120,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 119,
                  "end": 120,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 122,
                "end": 126,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 125,
                  "end": 126,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 170,
      "end": 196,
      "body": {
        "type": "TSInterfaceBody",
        "start": 185,
        "end": 196,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 187,
            "end": 194,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 194,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 190,
                "end": 194
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 184,
        "decorators": [],
        "name": "Type",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 197,
      "end": 232,
      "body": {
        "type": "TSInterfaceBody",
        "start": 221,
        "end": 232,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 223,
            "end": 230,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "q",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 230,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 226,
                "end": 230
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 220,
        "decorators": [],
        "name": "QueryMetadata",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 234,
      "end": 533,
      "body": {
        "type": "TSInterfaceBody",
        "start": 265,
        "end": 533,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 271,
            "end": 399,
            "params": [
              {
                "type": "Identifier",
                "start": 272,
                "end": 295,
                "decorators": [],
                "name": "selector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 280,
                  "end": 295,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 282,
                    "end": 295,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 282,
                        "end": 286,
                        "typeName": {
                          "type": "Identifier",
                          "start": 282,
                          "end": 286,
                          "decorators": [],
                          "name": "Type",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 289,
                        "end": 295
                      }
                    ]
                  }
                }
              },
              {
                "type": "ObjectPattern",
                "start": 297,
                "end": 377,
                "decorators": [],
                "optional": true,
                "properties": [
                  {
                    "type": "Property",
                    "start": 298,
                    "end": 309,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 309,
                      "decorators": [],
                      "name": "descendants",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 309,
                      "decorators": [],
                      "name": "descendants",
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 311,
                    "end": 315,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 315,
                      "decorators": [],
                      "name": "read",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 315,
                      "decorators": [],
                      "name": "read",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 317,
                  "end": 377,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 319,
                    "end": 377,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 329,
                        "end": 351,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 329,
                          "end": 340,
                          "decorators": [],
                          "name": "descendants",
                          "optional": false
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 341,
                          "end": 350,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 343,
                            "end": 350
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 360,
                        "end": 371,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 360,
                          "end": 364,
                          "decorators": [],
                          "name": "read",
                          "optional": false
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 365,
                          "end": 370,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 367,
                            "end": 370
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
              "start": 378,
              "end": 398,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 380,
                "end": 398,
                "typeName": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 398,
                  "decorators": [],
                  "name": "ParameterDecorator",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 404,
            "end": 531,
            "params": [
              {
                "type": "Identifier",
                "start": 409,
                "end": 432,
                "decorators": [],
                "name": "selector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 417,
                  "end": 432,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 419,
                    "end": 432,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 419,
                        "end": 423,
                        "typeName": {
                          "type": "Identifier",
                          "start": 419,
                          "end": 423,
                          "decorators": [],
                          "name": "Type",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 426,
                        "end": 432
                      }
                    ]
                  }
                }
              },
              {
                "type": "ObjectPattern",
                "start": 434,
                "end": 514,
                "decorators": [],
                "optional": true,
                "properties": [
                  {
                    "type": "Property",
                    "start": 435,
                    "end": 446,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 435,
                      "end": 446,
                      "decorators": [],
                      "name": "descendants",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 435,
                      "end": 446,
                      "decorators": [],
                      "name": "descendants",
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 448,
                    "end": 452,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 448,
                      "end": 452,
                      "decorators": [],
                      "name": "read",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 448,
                      "end": 452,
                      "decorators": [],
                      "name": "read",
                      "optional": false
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 454,
                  "end": 514,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 456,
                    "end": 514,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 466,
                        "end": 488,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 466,
                          "end": 477,
                          "decorators": [],
                          "name": "descendants",
                          "optional": false
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 478,
                          "end": 487,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 480,
                            "end": 487
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 497,
                        "end": 508,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 497,
                          "end": 501,
                          "decorators": [],
                          "name": "read",
                          "optional": false
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 502,
                          "end": 507,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 504,
                            "end": 507
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
              "start": 515,
              "end": 530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 517,
                "end": 530,
                "typeName": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 530,
                  "decorators": [],
                  "name": "QueryMetadata",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 264,
        "decorators": [],
        "name": "QueryMetadataFactory",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
