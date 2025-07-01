__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 25
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 27
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 26,
                  "end": 27
                }
              ],
              "start": 25,
              "end": 28
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 37,
                      "end": 38
                    },
                    "typeArguments": null,
                    "start": 37,
                    "end": 38
                  },
                  "start": 35,
                  "end": 38
                },
                "start": 29,
                "end": 38
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "objs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 47
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 49,
                      "end": 52
                    },
                    "start": 49,
                    "end": 54
                  },
                  "start": 47,
                  "end": 54
                },
                "value": null,
                "start": 40,
                "end": 54
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 58
                },
                "typeArguments": null,
                "start": 57,
                "end": 58
              },
              "start": 55,
              "end": 58
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 19,
            "end": 59
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 70
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 71,
                  "end": 72
                }
              ],
              "start": 70,
              "end": 73
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deep",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 80,
                    "end": 87
                  },
                  "start": 78,
                  "end": 87
                },
                "start": 74,
                "end": 87
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 98
                    },
                    "typeArguments": null,
                    "start": 97,
                    "end": 98
                  },
                  "start": 95,
                  "end": 98
                },
                "start": 89,
                "end": 98
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "objs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 107
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    },
                    "start": 109,
                    "end": 114
                  },
                  "start": 107,
                  "end": 114
                },
                "value": null,
                "start": 100,
                "end": 114
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 118
                },
                "typeArguments": null,
                "start": 117,
                "end": 118
              },
              "start": 115,
              "end": 118
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 64,
            "end": 119
          }
        ],
        "start": 13,
        "end": 121
      },
      "declare": false,
      "start": 0,
      "end": 121
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 140
                },
                "typeArguments": null,
                "start": 137,
                "end": 140
              },
              "start": 135,
              "end": 140
            },
            "start": 134,
            "end": 140
          },
          "init": null,
          "definite": false,
          "start": 134,
          "end": 140
        }
      ],
      "declare": true,
      "start": 122,
      "end": 141
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 147
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 151
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "extend",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 158
              },
              "optional": false,
              "computed": false,
              "start": 150,
              "end": 158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 169
                    },
                    "value": {
                      "type": "Literal",
                      "value": "GET",
                      "raw": "\"GET\"",
                      "start": 171,
                      "end": 176
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 165,
                    "end": 176
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 187
                    },
                    "value": {
                      "type": "Literal",
                      "value": "data",
                      "raw": "\"data\"",
                      "start": 189,
                      "end": 195
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 183,
                    "end": 195
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "success",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 209
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wrapSuccessCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 230
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "requestContext",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 245
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "callback",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 255
                        }
                      ],
                      "optional": false,
                      "start": 211,
                      "end": 256
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 202,
                    "end": 256
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 268
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wrapErrorCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 270,
                        "end": 287
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "requestContext",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 302
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "errorCallback",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 317
                        }
                      ],
                      "optional": false,
                      "start": 270,
                      "end": 318
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 263,
                    "end": 318
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dataType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 333
                    },
                    "value": {
                      "type": "Literal",
                      "value": "json",
                      "raw": "\"json\"",
                      "start": 335,
                      "end": 341
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 325,
                    "end": 341
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "converters",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 348,
                      "end": 358
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Literal",
                            "value": "text json",
                            "raw": "\"text json\"",
                            "start": 362,
                            "end": 373
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 375,
                            "end": 377
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 362,
                          "end": 377
                        }
                      ],
                      "start": 360,
                      "end": 379
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 348,
                    "end": 379
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "traditional",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 385,
                      "end": 396
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 398,
                      "end": 402
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 385,
                    "end": 402
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "timeout",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 416
                    },
                    "value": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 418,
                      "end": 420
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 409,
                    "end": 420
                  }
                ],
                "start": 159,
                "end": 427
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 429,
                "end": 431
              }
            ],
            "optional": false,
            "start": 150,
            "end": 432
          },
          "definite": false,
          "start": 146,
          "end": 432
        }
      ],
      "declare": false,
      "start": 142,
      "end": 433
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 433
}
```
