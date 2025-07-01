__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 25,
                  "end": 31
                },
                {
                  "type": "TSStringKeyword",
                  "start": 33,
                  "end": 39
                },
                {
                  "type": "TSStringKeyword",
                  "start": 41,
                  "end": 47
                }
              ],
              "start": 24,
              "end": 48
            },
            "start": 22,
            "end": 48
          },
          "start": 13,
          "end": 48
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 51,
          "end": 55
        },
        "start": 49,
        "end": 55
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 56,
        "end": 59
      },
      "expression": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "far",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 72
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 79
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 80
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 86
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 87
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 91,
                  "end": 97
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 99,
                    "end": 106
                  },
                  "start": 99,
                  "end": 108
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 110,
                      "end": 116
                    },
                    "start": 110,
                    "end": 118
                  },
                  "start": 110,
                  "end": 120
                }
              ],
              "start": 90,
              "end": 121
            },
            "start": 88,
            "end": 121
          },
          "start": 73,
          "end": 121
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 124,
          "end": 128
        },
        "start": 122,
        "end": 128
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 129,
        "end": 132
      },
      "expression": false,
      "start": 60,
      "end": 132
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 145
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 149
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 149
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 147,
              "end": 149
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 153
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 153
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 151,
              "end": 153
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 157
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 157
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 155,
              "end": 157
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 164
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 166,
                      "end": 172
                    },
                    "start": 164,
                    "end": 172
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 162,
                  "end": 173
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 176
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 178,
                      "end": 185
                    },
                    "start": 176,
                    "end": 185
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 174,
                  "end": 186
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 189
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 191,
                      "end": 197
                    },
                    "start": 189,
                    "end": 197
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 187,
                  "end": 197
                }
              ],
              "start": 160,
              "end": 199
            },
            "start": 158,
            "end": 199
          },
          "start": 146,
          "end": 199
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 202,
          "end": 206
        },
        "start": 200,
        "end": 206
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 207,
        "end": 210
      },
      "expression": false,
      "start": 133,
      "end": 210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 223
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 227
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 227
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 225,
              "end": 227
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 231
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 236
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 236
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 234,
                    "end": 236
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 240
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 240
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 238,
                    "end": 240
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 241
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 229,
              "end": 241
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 248
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 250,
                      "end": 256
                    },
                    "start": 248,
                    "end": 256
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 246,
                  "end": 257
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 260
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 264,
                            "end": 266
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 268,
                              "end": 275
                            },
                            "start": 266,
                            "end": 275
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 264,
                          "end": 276
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 277,
                            "end": 279
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 281,
                              "end": 287
                            },
                            "start": 279,
                            "end": 287
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 277,
                          "end": 287
                        }
                      ],
                      "start": 262,
                      "end": 289
                    },
                    "start": 260,
                    "end": 289
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 258,
                  "end": 289
                }
              ],
              "start": 244,
              "end": 291
            },
            "start": 242,
            "end": 291
          },
          "start": 224,
          "end": 291
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 294,
          "end": 298
        },
        "start": 292,
        "end": 298
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 299,
        "end": 302
      },
      "expression": false,
      "start": 211,
      "end": 302
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 303
}
```
