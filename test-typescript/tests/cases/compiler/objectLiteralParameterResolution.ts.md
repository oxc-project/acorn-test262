__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 434,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 121,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 121,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 19,
            "end": 59,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "extend",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 29,
                "end": 38,
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 37,
                    "end": 38,
                    "typeName": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 40,
                "end": 54,
                "argument": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "decorators": [],
                  "name": "objs",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 49,
                    "end": 54,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 49,
                      "end": 52
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 58,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 25,
              "end": 28,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 26,
                  "end": 27,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
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
            "type": "TSMethodSignature",
            "start": 64,
            "end": 119,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 70,
              "decorators": [],
              "name": "extend",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 87,
                "decorators": [],
                "name": "deep",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 87,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 80,
                    "end": 87
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 89,
                "end": 98,
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 98,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 97,
                    "end": 98,
                    "typeName": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 100,
                "end": 114,
                "argument": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 107,
                  "decorators": [],
                  "name": "objs",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 107,
                  "end": 114,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 109,
                    "end": 114,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 118,
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 70,
              "end": 73,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 71,
                  "end": 72,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 140,
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 140,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 432,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 432,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 159,
                "end": 427,
                "properties": [
                  {
                    "type": "Property",
                    "start": 165,
                    "end": 176,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 169,
                      "decorators": [],
                      "name": "type",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 171,
                      "end": 176,
                      "raw": "\"GET\"",
                      "value": "GET"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 183,
                    "end": 195,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 187,
                      "decorators": [],
                      "name": "data",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 189,
                      "end": 195,
                      "raw": "\"data\"",
                      "value": "data"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 202,
                    "end": 256,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 209,
                      "decorators": [],
                      "name": "success",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 211,
                      "end": 256,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 231,
                          "end": 245,
                          "decorators": [],
                          "name": "requestContext",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 247,
                          "end": 255,
                          "decorators": [],
                          "name": "callback",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 230,
                        "decorators": [],
                        "name": "wrapSuccessCallback",
                        "optional": false
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 263,
                    "end": 318,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 268,
                      "decorators": [],
                      "name": "error",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 270,
                      "end": 318,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 288,
                          "end": 302,
                          "decorators": [],
                          "name": "requestContext",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 304,
                          "end": 317,
                          "decorators": [],
                          "name": "errorCallback",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 287,
                        "decorators": [],
                        "name": "wrapErrorCallback",
                        "optional": false
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 325,
                    "end": 341,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 333,
                      "decorators": [],
                      "name": "dataType",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 335,
                      "end": 341,
                      "raw": "\"json\"",
                      "value": "json"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 348,
                    "end": 379,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 348,
                      "end": 358,
                      "decorators": [],
                      "name": "converters",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 360,
                      "end": 379,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 362,
                          "end": 377,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 362,
                            "end": 373,
                            "raw": "\"text json\"",
                            "value": "text json"
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 375,
                            "end": 377,
                            "raw": "\"\"",
                            "value": ""
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 385,
                    "end": 402,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 396,
                      "decorators": [],
                      "name": "traditional",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 398,
                      "end": 402,
                      "raw": "true",
                      "value": true
                    }
                  },
                  {
                    "type": "Property",
                    "start": 409,
                    "end": 420,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 416,
                      "decorators": [],
                      "name": "timeout",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 418,
                      "end": 420,
                      "raw": "12",
                      "value": 12
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 429,
                "end": 431,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 158,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "$",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 158,
                "decorators": [],
                "name": "extend",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
