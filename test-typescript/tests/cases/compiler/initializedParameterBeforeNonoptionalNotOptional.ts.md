__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 310,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 61,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 61,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
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
            "type": "ObjectPattern",
            "start": 28,
            "end": 53,
            "properties": [
              {
                "type": "Property",
                "start": 29,
                "end": 30,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 34,
                "end": 53,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 40,
                    "end": 51,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 42,
                      "end": 50,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 44,
                        "end": 50
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
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 54,
          "end": 60,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 56,
            "end": 60
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 158,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 69,
        "end": 158,
        "id": {
          "type": "Identifier",
          "start": 86,
          "end": 90,
          "name": "foo2",
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
            "start": 91,
            "end": 139,
            "properties": [
              {
                "type": "Property",
                "start": 92,
                "end": 93,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "a",
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
              "start": 94,
              "end": 139,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 96,
                "end": 139,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 96,
                    "end": 127,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 102,
                        "end": 125,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 103,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 104,
                          "end": 124,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 106,
                            "end": 124,
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 106,
                                "end": 112
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 115,
                                "end": 124
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 130,
                    "end": 139
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 141,
            "end": 150,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
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
          "start": 151,
          "end": 157,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 153,
            "end": 157
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 159,
      "end": 310,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 166,
        "end": 310,
        "id": {
          "type": "Identifier",
          "start": 183,
          "end": 187,
          "name": "foo3",
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
            "start": 188,
            "end": 291,
            "properties": [
              {
                "type": "Property",
                "start": 189,
                "end": 190,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 192,
                "end": 198,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 195,
                  "end": 198,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 196,
                      "end": 197,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 197,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 197,
                        "name": "c",
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
              "start": 199,
              "end": 291,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 201,
                "end": 291,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 201,
                    "end": 279,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 207,
                        "end": 230,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 208,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 209,
                          "end": 229,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 211,
                            "end": 229,
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 211,
                                "end": 217
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 220,
                                "end": 229
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 235,
                        "end": 277,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 236,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 237,
                          "end": 276,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 239,
                            "end": 276,
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "start": 239,
                                "end": 264,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 240,
                                    "end": 263,
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 240,
                                      "end": 241,
                                      "name": "c",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 242,
                                      "end": 262,
                                      "typeAnnotation": {
                                        "type": "TSUnionType",
                                        "start": 244,
                                        "end": 262,
                                        "types": [
                                          {
                                            "type": "TSStringKeyword",
                                            "start": 244,
                                            "end": 250
                                          },
                                          {
                                            "type": "TSUndefinedKeyword",
                                            "start": 253,
                                            "end": 262
                                          }
                                        ]
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 267,
                                "end": 276
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 282,
                    "end": 291
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 293,
            "end": 302,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 302,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 296,
                "end": 302
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
          "start": 303,
          "end": 309,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 305,
            "end": 309
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
