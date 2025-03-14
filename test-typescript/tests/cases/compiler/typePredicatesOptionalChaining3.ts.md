typePredicatesOptionalChaining3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 504,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 37,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 35,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 26,
              "decorators": [],
              "name": "breed",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 34,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 34,
                  "decorators": [],
                  "name": "Breed",
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
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Animal",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 74,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 74,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 72,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "size",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 53,
        "decorators": [],
        "name": "Breed",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 76,
      "end": 142,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 98,
        "decorators": [],
        "name": "isNil",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 99,
          "end": 113,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 113,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 106,
              "end": 113
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 114,
        "end": 141,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 116,
          "end": 141,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 116,
            "end": 121,
            "decorators": [],
            "name": "value",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 141,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 125,
              "end": 141,
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 125,
                  "end": 134
                },
                {
                  "type": "TSNullKeyword",
                  "start": 137,
                  "end": 141
                }
              ]
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 324,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 324,
        "body": [
          {
            "type": "IfStatement",
            "start": 221,
            "end": 322,
            "alternate": {
              "type": "BlockStatement",
              "start": 295,
              "end": 322,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 301,
                  "end": 318,
                  "argument": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 317,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 254,
              "end": 289,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 260,
                  "end": 285,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 267,
                    "end": 284,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 267,
                      "end": 279,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 267,
                        "end": 273,
                        "decorators": [],
                        "name": "animal",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 279,
                        "decorators": [],
                        "name": "breed",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 284,
                      "decorators": [],
                      "name": "size",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 225,
              "end": 252,
              "operator": "!=",
              "left": {
                "type": "ChainExpression",
                "start": 225,
                "end": 244,
                "expression": {
                  "type": "MemberExpression",
                  "start": 225,
                  "end": 244,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 225,
                    "end": 238,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 231,
                      "decorators": [],
                      "name": "animal",
                      "optional": false
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 238,
                      "decorators": [],
                      "name": "breed",
                      "optional": false
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 244,
                    "decorators": [],
                    "name": "size",
                    "optional": false
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 248,
                "end": 252,
                "raw": "null",
                "value": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 180,
        "decorators": [],
        "name": "getBreedSizeWithoutFunction",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 181,
          "end": 195,
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 187,
            "end": 195,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 189,
              "end": 195,
              "typeName": {
                "type": "Identifier",
                "start": 189,
                "end": 195,
                "decorators": [],
                "name": "Animal",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 196,
        "end": 216,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 198,
          "end": 216,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 198,
              "end": 204
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 207,
              "end": 216
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 326,
      "end": 503,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 396,
        "end": 503,
        "body": [
          {
            "type": "IfStatement",
            "start": 400,
            "end": 501,
            "alternate": {
              "type": "BlockStatement",
              "start": 474,
              "end": 501,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 480,
                  "end": 497,
                  "argument": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 496,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 433,
              "end": 468,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 439,
                  "end": 464,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 446,
                    "end": 463,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 446,
                      "end": 458,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 446,
                        "end": 452,
                        "decorators": [],
                        "name": "animal",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 458,
                        "decorators": [],
                        "name": "breed",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 463,
                      "decorators": [],
                      "name": "size",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 404,
              "end": 431,
              "argument": {
                "type": "CallExpression",
                "start": 405,
                "end": 431,
                "arguments": [
                  {
                    "type": "ChainExpression",
                    "start": 411,
                    "end": 430,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 411,
                      "end": 430,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 411,
                        "end": 424,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 411,
                          "end": 417,
                          "decorators": [],
                          "name": "animal",
                          "optional": false
                        },
                        "optional": true,
                        "property": {
                          "type": "Identifier",
                          "start": 419,
                          "end": 424,
                          "decorators": [],
                          "name": "breed",
                          "optional": false
                        }
                      },
                      "optional": true,
                      "property": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 430,
                        "decorators": [],
                        "name": "size",
                        "optional": false
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 410,
                  "decorators": [],
                  "name": "isNil",
                  "optional": false
                },
                "optional": false
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 359,
        "decorators": [],
        "name": "getBreedSizeWithFunction",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 360,
          "end": 374,
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 366,
            "end": 374,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 368,
              "end": 374,
              "typeName": {
                "type": "Identifier",
                "start": 368,
                "end": 374,
                "decorators": [],
                "name": "Animal",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 375,
        "end": 395,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 377,
          "end": 395,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 377,
              "end": 383
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 386,
              "end": 395
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
