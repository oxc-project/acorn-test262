__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 50,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 50,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 19,
              "name": "foo"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 33,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 33,
              "end": 37,
              "name": "bar"
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 105,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 105,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 70,
              "end": 74,
              "name": "foo"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 88,
            "end": 103,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 88,
              "end": 92,
              "name": "bar"
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 228,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 124,
                "end": 228,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 130,
                    "end": 143,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "PrivateIdentifier",
                      "start": 130,
                      "end": 134,
                      "name": "foo"
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 134,
                      "end": 142,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 136,
                        "end": 142
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 206,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 151,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 151,
                      "end": 206,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 153,
                        "end": 206,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 163,
                            "end": 176,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "PrivateIdentifier",
                              "start": 163,
                              "end": 167,
                              "name": "baz"
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 167,
                              "end": 175,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 169,
                                "end": 175
                              }
                            }
                          },
                          {
                            "type": "TSMethodSignature",
                            "start": 185,
                            "end": 200,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "PrivateIdentifier",
                              "start": 185,
                              "end": 189,
                              "name": "taz"
                            },
                            "kind": "method",
                            "optional": false,
                            "params": [],
                            "readonly": false,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 191,
                              "end": 199,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 193,
                                "end": 199
                              }
                            },
                            "static": false,
                            "typeParameters": null
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 211,
                    "end": 226,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "PrivateIdentifier",
                      "start": 211,
                      "end": 215,
                      "name": "baz"
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 217,
                      "end": 225,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 219,
                        "end": 225
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 271,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 271,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 271,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 248,
                "end": 271,
                "elementTypes": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 249,
                    "end": 270,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 251,
                        "end": 268,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 254,
                          "decorators": [],
                          "name": "qux",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 254,
                          "end": 268,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 256,
                            "end": 268,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 258,
                                "end": 266,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "PrivateIdentifier",
                                  "start": 258,
                                  "end": 263,
                                  "name": "quux"
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 263,
                                  "end": 266,
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "start": 265,
                                    "end": 266,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 265,
                                      "end": 266,
                                      "raw": "3",
                                      "value": 3
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
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
