discriminatedUnionWithIndexSignature.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 455,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 49,
        "body": {
          "type": "TSInterfaceBody",
          "start": 27,
          "end": 49,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 33,
              "end": 47,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "decorators": [],
                "name": "type",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 46,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 40,
                  "end": 46,
                  "literal": {
                    "type": "Literal",
                    "start": 40,
                    "end": 46,
                    "raw": "'text'",
                    "value": "text"
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 26,
          "decorators": [],
          "name": "UnionAltA",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 124,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 58,
        "end": 124,
        "body": {
          "type": "TSInterfaceBody",
          "start": 78,
          "end": 124,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 84,
              "end": 122,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 88,
                "decorators": [],
                "name": "type",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 89,
                "end": 121,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 91,
                  "end": 121,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 91,
                      "end": 98,
                      "literal": {
                        "type": "Literal",
                        "start": 91,
                        "end": 98,
                        "raw": "'image'",
                        "value": "image"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 101,
                      "end": 108,
                      "literal": {
                        "type": "Literal",
                        "start": 101,
                        "end": 108,
                        "raw": "'video'",
                        "value": "video"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 111,
                      "end": 121,
                      "literal": {
                        "type": "Literal",
                        "start": 111,
                        "end": 121,
                        "raw": "'document'",
                        "value": "document"
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 77,
          "decorators": [],
          "name": "UnionAltB",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 126,
      "end": 173,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 133,
        "end": 173,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 138,
          "end": 148,
          "decorators": [],
          "name": "ValueUnion",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 151,
          "end": 172,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 151,
              "end": 160,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 160,
                "decorators": [],
                "name": "UnionAltA",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 163,
              "end": 172,
              "typeName": {
                "type": "Identifier",
                "start": 163,
                "end": 172,
                "decorators": [],
                "name": "UnionAltB",
                "optional": false
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 175,
      "end": 270,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 182,
        "end": 270,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 187,
          "end": 201,
          "decorators": [],
          "name": "MapOrSingleton",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 208,
          "end": 269,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 210,
              "end": 252,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 220,
                  "end": 246,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 221,
                      "end": 232,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 224,
                        "end": 232,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 226,
                          "end": 232
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 235,
                      "end": 245,
                      "typeName": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 245,
                        "decorators": [],
                        "name": "ValueUnion",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            {
              "type": "TSTypeReference",
              "start": 259,
              "end": 269,
              "typeName": {
                "type": "Identifier",
                "start": 259,
                "end": 269,
                "decorators": [],
                "name": "ValueUnion",
                "optional": false
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 365,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 308,
            "decorators": [],
            "name": "withoutAsConst",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 308,
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 308,
                  "decorators": [],
                  "name": "MapOrSingleton",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 311,
            "end": 365,
            "properties": [
              {
                "type": "Property",
                "start": 317,
                "end": 362,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 317,
                  "end": 318,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 320,
                  "end": 362,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 330,
                      "end": 342,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 334,
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
                        "start": 336,
                        "end": 342,
                        "raw": "'text'",
                        "value": "text"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 454,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 401,
            "decorators": [],
            "name": "withAsConst",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 385,
              "end": 401,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 387,
                "end": 401,
                "typeName": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 401,
                  "decorators": [],
                  "name": "MapOrSingleton",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 404,
            "end": 454,
            "properties": [
              {
                "type": "Property",
                "start": 410,
                "end": 451,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 410,
                  "end": 411,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 413,
                  "end": 451,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 423,
                      "end": 444,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 427,
                        "decorators": [],
                        "name": "type",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "TSAsExpression",
                        "start": 429,
                        "end": 444,
                        "expression": {
                          "type": "Literal",
                          "start": 429,
                          "end": 435,
                          "raw": "'text'",
                          "value": "text"
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 439,
                          "end": 444,
                          "typeName": {
                            "type": "Identifier",
                            "start": 439,
                            "end": 444,
                            "decorators": [],
                            "name": "const",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
