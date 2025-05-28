__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 433,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 121,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 19,
            "end": 59,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 25,
              "end": 28,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 26,
                  "end": 27,
                  "name": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "T",
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 40,
                "end": 54,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "decorators": [],
                  "name": "objs",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "value": null
              }
            ],
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 64,
            "end": 119,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 70,
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 70,
              "end": 73,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 71,
                  "end": 72,
                  "name": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "T",
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 100,
                "end": 114,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 107,
                  "decorators": [],
                  "name": "objs",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "value": null
              }
            ],
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 141,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 140,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 433,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 432,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 432,
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 158,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "$",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 158,
                "decorators": [],
                "name": "extend",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 169,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 171,
                      "end": 176,
                      "value": "GET",
                      "raw": "\"GET\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 183,
                    "end": 195,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 187,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 189,
                      "end": 195,
                      "value": "data",
                      "raw": "\"data\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 202,
                    "end": 256,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 209,
                      "decorators": [],
                      "name": "success",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "CallExpression",
                      "start": 211,
                      "end": 256,
                      "callee": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 230,
                        "decorators": [],
                        "name": "wrapSuccessCallback",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 231,
                          "end": 245,
                          "decorators": [],
                          "name": "requestContext",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 247,
                          "end": 255,
                          "decorators": [],
                          "name": "callback",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 263,
                    "end": 318,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 268,
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "CallExpression",
                      "start": 270,
                      "end": 318,
                      "callee": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 287,
                        "decorators": [],
                        "name": "wrapErrorCallback",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 288,
                          "end": 302,
                          "decorators": [],
                          "name": "requestContext",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 304,
                          "end": 317,
                          "decorators": [],
                          "name": "errorCallback",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 325,
                    "end": 341,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 333,
                      "decorators": [],
                      "name": "dataType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 335,
                      "end": 341,
                      "value": "json",
                      "raw": "\"json\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 348,
                    "end": 379,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 348,
                      "end": 358,
                      "decorators": [],
                      "name": "converters",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 360,
                      "end": 379,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 362,
                          "end": 377,
                          "kind": "init",
                          "key": {
                            "type": "Literal",
                            "start": 362,
                            "end": 373,
                            "value": "text json",
                            "raw": "\"text json\""
                          },
                          "value": {
                            "type": "Literal",
                            "start": 375,
                            "end": 377,
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 385,
                    "end": 402,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 396,
                      "decorators": [],
                      "name": "traditional",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 398,
                      "end": 402,
                      "value": true,
                      "raw": "true"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 409,
                    "end": 420,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 416,
                      "decorators": [],
                      "name": "timeout",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 418,
                      "end": 420,
                      "value": 12,
                      "raw": "12"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 429,
                "end": 431,
                "value": "",
                "raw": "\"\""
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
