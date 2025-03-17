__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 304,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 13,
          "end": 48,
          "elements": [
            {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 48,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 24,
              "end": 48,
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
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 59,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 49,
        "end": 55,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 51,
          "end": 55
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 60,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "name": "far",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 73,
          "end": 121,
          "elements": [
            {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 77,
              "end": 80,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 82,
              "end": 87,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 83,
                  "end": 86,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 121,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 90,
              "end": 121,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 91,
                  "end": 97
                },
                {
                  "type": "TSArrayType",
                  "start": 99,
                  "end": 108,
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 99,
                    "end": 106
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 110,
                  "end": 120,
                  "elementType": {
                    "type": "TSArrayType",
                    "start": 110,
                    "end": 118,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 110,
                      "end": 116
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 132,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 122,
        "end": 128,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 124,
          "end": 128
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 145,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 146,
          "end": 199,
          "properties": [
            {
              "type": "Property",
              "start": 147,
              "end": 149,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 147,
                "end": 149,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 147,
                "end": 149,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 151,
              "end": 153,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 151,
                "end": 153,
                "name": "b1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 151,
                "end": 153,
                "name": "b1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 155,
              "end": 157,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 155,
                "end": 157,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 155,
                "end": 157,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 199,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 160,
              "end": 199,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 162,
                  "end": 173,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 164,
                    "name": "a1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 166,
                      "end": 172
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 174,
                  "end": 186,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 176,
                    "name": "b1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 185,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 178,
                      "end": 185
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 187,
                  "end": 197,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 189,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 191,
                      "end": 197
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 210,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 200,
        "end": 206,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 202,
          "end": 206
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 211,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 223,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 224,
          "end": 291,
          "properties": [
            {
              "type": "Property",
              "start": 225,
              "end": 227,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 227,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 225,
                "end": 227,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 229,
              "end": 241,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 229,
                "end": 231,
                "name": "b2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 233,
                "end": 241,
                "properties": [
                  {
                    "type": "Property",
                    "start": 234,
                    "end": 236,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 236,
                      "name": "b1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 236,
                      "name": "b1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 238,
                    "end": 240,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 240,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 240,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 291,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 244,
              "end": 291,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 246,
                  "end": 257,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 248,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 250,
                      "end": 256
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 258,
                  "end": 289,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 260,
                    "name": "b2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 260,
                    "end": 289,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 262,
                      "end": 289,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 264,
                          "end": 276,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 264,
                            "end": 266,
                            "name": "b1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 266,
                            "end": 275,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 268,
                              "end": 275
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 277,
                          "end": 287,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 277,
                            "end": 279,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 279,
                            "end": 287,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 281,
                              "end": 287
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 299,
        "end": 302,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 292,
        "end": 298,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 294,
          "end": 298
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
