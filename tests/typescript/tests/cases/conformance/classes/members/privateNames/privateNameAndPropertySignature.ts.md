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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 50,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 19,
              "name": "foo"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 33,
            "end": 48,
            "key": {
              "type": "PrivateIdentifier",
              "start": 33,
              "end": 37,
              "name": "bar"
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 105,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 70,
              "end": 74,
              "name": "foo"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 88,
            "end": 103,
            "key": {
              "type": "PrivateIdentifier",
              "start": 88,
              "end": 92,
              "name": "bar"
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
      "start": 107,
      "end": 229,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 228,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "PrivateIdentifier",
                      "start": 130,
                      "end": 134,
                      "name": "foo"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 134,
                      "end": 142,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 136,
                        "end": 142
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 206,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 151,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "PrivateIdentifier",
                              "start": 163,
                              "end": 167,
                              "name": "baz"
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 167,
                              "end": 175,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 169,
                                "end": 175
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSMethodSignature",
                            "start": 185,
                            "end": 200,
                            "key": {
                              "type": "PrivateIdentifier",
                              "start": 185,
                              "end": 189,
                              "name": "taz"
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [],
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
                            "accessibility": null,
                            "readonly": false,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 211,
                    "end": 226,
                    "key": {
                      "type": "PrivateIdentifier",
                      "start": 211,
                      "end": 215,
                      "name": "baz"
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "start": 231,
      "end": 272,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 271,
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 254,
                          "decorators": [],
                          "name": "qux",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "PrivateIdentifier",
                                  "start": 258,
                                  "end": 263,
                                  "name": "quux"
                                },
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
                                      "value": 3,
                                      "raw": "3"
                                    }
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
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
