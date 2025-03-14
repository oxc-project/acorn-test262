__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 580,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 37,
      "end": 89,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 48,
        "decorators": [],
        "name": "Mapped",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 54,
        "end": 88,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 62,
          "end": 69,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 68,
            "end": 69,
            "typeName": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 72,
          "end": 86,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 74,
              "end": 84,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 74,
                "end": 78,
                "decorators": [],
                "name": "name",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 78,
                "end": 84,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 80,
                  "end": 84,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 82,
                    "end": 83,
                    "typeName": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 80,
                    "end": 81,
                    "typeName": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
        "start": 48,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 50,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 90,
      "end": 154,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 110,
        "decorators": [],
        "name": "InferFromMapped",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 116,
        "end": 153,
        "checkType": {
          "type": "TSTypeReference",
          "start": 116,
          "end": 117,
          "typeName": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 126,
          "end": 141,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 132,
            "end": 141,
            "params": [
              {
                "type": "TSInferType",
                "start": 133,
                "end": 140,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 139,
                  "end": 140,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "decorators": [],
                    "name": "R",
                    "optional": false
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 126,
            "end": 132,
            "decorators": [],
            "name": "Mapped",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 148,
          "end": 153
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 144,
          "end": 145,
          "typeName": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "R",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 110,
        "end": 113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 112,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 284,
      "end": 342,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 300,
        "decorators": [],
        "name": "LiteralType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 303,
        "end": 342,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 306,
            "end": 321,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 311,
              "decorators": [],
              "name": "first",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 320,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 313,
                "end": 320,
                "literal": {
                  "type": "Literal",
                  "start": 313,
                  "end": 320,
                  "raw": "\"first\"",
                  "value": "first"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 323,
            "end": 340,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 329,
              "decorators": [],
              "name": "second",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 339,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 331,
                "end": 339,
                "literal": {
                  "type": "Literal",
                  "start": 331,
                  "end": 339,
                  "raw": "\"second\"",
                  "value": "second"
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 343,
      "end": 428,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 365,
        "decorators": [],
        "name": "MappedLiteralType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 368,
        "end": 427,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 371,
            "end": 396,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 376,
              "decorators": [],
              "name": "first",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 395,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 378,
                "end": 395,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 380,
                    "end": 393,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 380,
                      "end": 384,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 384,
                      "end": 393,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 386,
                        "end": 393,
                        "literal": {
                          "type": "Literal",
                          "start": 386,
                          "end": 393,
                          "raw": "\"first\"",
                          "value": "first"
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 398,
            "end": 425,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 398,
              "end": 404,
              "decorators": [],
              "name": "second",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 424,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 406,
                "end": 424,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 408,
                    "end": 422,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 412,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 412,
                      "end": 422,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 414,
                        "end": 422,
                        "literal": {
                          "type": "Literal",
                          "start": 414,
                          "end": 422,
                          "raw": "\"second\"",
                          "value": "second"
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 430,
      "end": 481,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 435,
        "end": 443,
        "decorators": [],
        "name": "Inferred",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 446,
        "end": 480,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 461,
          "end": 480,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 462,
              "end": 479,
              "typeName": {
                "type": "Identifier",
                "start": 462,
                "end": 479,
                "decorators": [],
                "name": "MappedLiteralType",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 446,
          "end": 461,
          "decorators": [],
          "name": "InferFromMapped",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 515,
      "end": 580,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 520,
        "end": 525,
        "decorators": [],
        "name": "Test1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 528,
        "end": 579,
        "checkType": {
          "type": "TSTypeReference",
          "start": 528,
          "end": 536,
          "typeName": {
            "type": "Identifier",
            "start": 528,
            "end": 536,
            "decorators": [],
            "name": "Inferred",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 545,
          "end": 564,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 551,
            "end": 564,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 552,
                "end": 555
              },
              {
                "type": "TSStringKeyword",
                "start": 557,
                "end": 563
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 545,
            "end": 551,
            "decorators": [],
            "name": "Record",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 574,
          "end": 579,
          "literal": {
            "type": "Literal",
            "start": 574,
            "end": 579,
            "raw": "false",
            "value": false
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 567,
          "end": 571,
          "literal": {
            "type": "Literal",
            "start": 567,
            "end": 571,
            "raw": "true",
            "value": true
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
