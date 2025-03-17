__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 26,
              "name": "breed",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "Breed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 53,
        "name": "Breed",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "name": "size",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 76,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 98,
        "name": "isNil",
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
          "start": 99,
          "end": 113,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 113,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 106,
              "end": 113
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 114,
        "end": 141,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 116,
          "end": 141,
          "parameterName": {
            "type": "Identifier",
            "start": 116,
            "end": 121,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 180,
        "name": "getBreedSizeWithoutFunction",
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
          "start": 181,
          "end": 195,
          "name": "animal",
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
                "name": "Animal",
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
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 324,
        "body": [
          {
            "type": "IfStatement",
            "start": 221,
            "end": 322,
            "test": {
              "type": "BinaryExpression",
              "start": 225,
              "end": 252,
              "left": {
                "type": "ChainExpression",
                "start": 225,
                "end": 244,
                "expression": {
                  "type": "MemberExpression",
                  "start": 225,
                  "end": 244,
                  "object": {
                    "type": "MemberExpression",
                    "start": 225,
                    "end": 238,
                    "object": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 231,
                      "name": "animal",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 238,
                      "name": "breed",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 244,
                    "name": "size",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "start": 248,
                "end": 252,
                "value": null,
                "raw": "null"
              }
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
                    "object": {
                      "type": "MemberExpression",
                      "start": 267,
                      "end": 279,
                      "object": {
                        "type": "Identifier",
                        "start": 267,
                        "end": 273,
                        "name": "animal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 279,
                        "name": "breed",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 284,
                      "name": "size",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
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
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 359,
        "name": "getBreedSizeWithFunction",
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
          "start": 360,
          "end": 374,
          "name": "animal",
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
                "name": "Animal",
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
      "body": {
        "type": "BlockStatement",
        "start": 396,
        "end": 503,
        "body": [
          {
            "type": "IfStatement",
            "start": 400,
            "end": 501,
            "test": {
              "type": "UnaryExpression",
              "start": 404,
              "end": 431,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "CallExpression",
                "start": 405,
                "end": 431,
                "callee": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 410,
                  "name": "isNil",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ChainExpression",
                    "start": 411,
                    "end": 430,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 411,
                      "end": 430,
                      "object": {
                        "type": "MemberExpression",
                        "start": 411,
                        "end": 424,
                        "object": {
                          "type": "Identifier",
                          "start": 411,
                          "end": 417,
                          "name": "animal",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 419,
                          "end": 424,
                          "name": "breed",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": true
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 430,
                        "name": "size",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    }
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
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
                    "object": {
                      "type": "MemberExpression",
                      "start": 446,
                      "end": 458,
                      "object": {
                        "type": "Identifier",
                        "start": 446,
                        "end": 452,
                        "name": "animal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 458,
                        "name": "breed",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 463,
                      "name": "size",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
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
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
  "sourceType": "script",
  "hashbang": null
}
```
