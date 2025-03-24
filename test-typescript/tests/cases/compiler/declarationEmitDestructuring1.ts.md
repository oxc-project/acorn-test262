__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 303,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 59,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 59,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 13,
          "end": 48,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 49,
        "end": 55,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 51,
          "end": 55
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 60,
      "end": 132,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 132,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "decorators": [],
        "name": "far",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 73,
          "end": 121,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 77,
              "end": 80,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 82,
              "end": 87,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 83,
                  "end": 86,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 122,
        "end": 128,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 124,
          "end": 128
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 210,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 210,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 145,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 146,
          "end": 199,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 147,
              "end": 149,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 147,
                "end": 149,
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 147,
                "end": 149,
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 151,
              "end": 153,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 151,
                "end": 153,
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 151,
                "end": 153,
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 155,
              "end": 157,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 155,
                "end": 157,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 155,
                "end": 157,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 164,
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 166,
                      "end": 172
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 174,
                  "end": 186,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 176,
                    "decorators": [],
                    "name": "b1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 185,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 178,
                      "end": 185
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 187,
                  "end": 197,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 189,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 191,
                      "end": 197
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
        "start": 200,
        "end": 206,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 202,
          "end": 206
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 211,
      "end": 302,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 299,
        "end": 302,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 223,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 224,
          "end": 291,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 225,
              "end": 227,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 227,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 225,
                "end": 227,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 229,
              "end": 241,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 229,
                "end": 231,
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectPattern",
                "start": 233,
                "end": 241,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 234,
                    "end": 236,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 236,
                      "decorators": [],
                      "name": "b1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 236,
                      "decorators": [],
                      "name": "b1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 238,
                    "end": 240,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 240,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 240,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            }
          ],
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 248,
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 250,
                      "end": 256
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 258,
                  "end": 289,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 260,
                    "decorators": [],
                    "name": "b2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 264,
                            "end": 266,
                            "decorators": [],
                            "name": "b1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 266,
                            "end": 275,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 268,
                              "end": 275
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 277,
                          "end": 287,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 277,
                            "end": 279,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 279,
                            "end": 287,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 281,
                              "end": 287
                            }
                          }
                        }
                      ]
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
        "start": 292,
        "end": 298,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 294,
          "end": 298
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
