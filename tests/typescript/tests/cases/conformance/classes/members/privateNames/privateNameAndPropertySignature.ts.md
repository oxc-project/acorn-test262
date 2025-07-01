__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 15,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 28
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 33,
              "end": 37
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 33,
            "end": 48
          }
        ],
        "start": 9,
        "end": 50
      },
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 70,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 83
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 88,
              "end": 92
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 88,
            "end": 103
          }
        ],
        "start": 64,
        "end": 105
      },
      "declare": false,
      "start": 52,
      "end": 105
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
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
                      "type": "PrivateIdentifier",
                      "name": "foo",
                      "start": 130,
                      "end": 134
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 136,
                        "end": 142
                      },
                      "start": 134,
                      "end": 142
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 130,
                    "end": 143
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 151
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
                              "type": "PrivateIdentifier",
                              "name": "baz",
                              "start": 163,
                              "end": 167
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 169,
                                "end": 175
                              },
                              "start": 167,
                              "end": 175
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 163,
                            "end": 176
                          },
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "PrivateIdentifier",
                              "name": "taz",
                              "start": 185,
                              "end": 189
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 193,
                                "end": 199
                              },
                              "start": 191,
                              "end": 199
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 185,
                            "end": 200
                          }
                        ],
                        "start": 153,
                        "end": 206
                      },
                      "start": 151,
                      "end": 206
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 148,
                    "end": 206
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "PrivateIdentifier",
                      "name": "baz",
                      "start": 211,
                      "end": 215
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 219,
                        "end": 225
                      },
                      "start": 217,
                      "end": 225
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 211,
                    "end": 226
                  }
                ],
                "start": 124,
                "end": 228
              },
              "start": 122,
              "end": 228
            },
            "start": 121,
            "end": 228
          },
          "init": null,
          "definite": false,
          "start": 121,
          "end": 228
        }
      ],
      "declare": true,
      "start": 107,
      "end": 229
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
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
                          "name": "qux",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 254
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
                                  "type": "PrivateIdentifier",
                                  "name": "quux",
                                  "start": 258,
                                  "end": 263
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": 3,
                                      "raw": "3",
                                      "start": 265,
                                      "end": 266
                                    },
                                    "start": 265,
                                    "end": 266
                                  },
                                  "start": 263,
                                  "end": 266
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 258,
                                "end": 266
                              }
                            ],
                            "start": 256,
                            "end": 268
                          },
                          "start": 254,
                          "end": 268
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 251,
                        "end": 268
                      }
                    ],
                    "start": 249,
                    "end": 270
                  }
                ],
                "start": 248,
                "end": 271
              },
              "start": 246,
              "end": 271
            },
            "start": 245,
            "end": 271
          },
          "init": null,
          "definite": false,
          "start": 245,
          "end": 271
        }
      ],
      "declare": true,
      "start": 231,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 272
}
```
