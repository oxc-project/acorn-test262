__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 368,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "name": "PropDeco",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 32,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 32,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 26,
              "end": 32,
              "typeName": {
                "type": "Identifier",
                "start": 26,
                "end": 32,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 34,
          "end": 58,
          "name": "propKey",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 58,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 43,
              "end": 58,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 43,
                  "end": 49
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 52,
                  "end": 58
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 63,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 76,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 119,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 92,
                "end": 101,
                "expression": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 101,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 118,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 109,
                "end": 118,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 109,
                    "end": 114,
                    "literal": {
                      "type": "Literal",
                      "start": 109,
                      "end": 114,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 117,
                    "end": 118,
                    "typeName": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 157,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 125,
                "end": 134,
                "expression": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 134,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 156,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 142,
                "end": 156,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 142,
                    "end": 146,
                    "literal": {
                      "type": "Literal",
                      "start": 142,
                      "end": 146,
                      "value": true,
                      "raw": "true"
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 149,
                    "end": 156
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 163,
            "end": 196,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 163,
                "end": 172,
                "expression": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 172,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 195,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 180,
                "end": 195,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 180,
                    "end": 185,
                    "literal": {
                      "type": "Literal",
                      "start": 180,
                      "end": 185,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 188,
                    "end": 195
                  }
                ]
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 200,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 213,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 220,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 227,
          "end": 228,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 234,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 207,
        "end": 237,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 213,
            "end": 214,
            "id": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 220,
            "end": 221,
            "id": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 227,
            "end": 228,
            "id": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 234,
            "end": 235,
            "id": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 239,
      "end": 368,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 246,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 247,
        "end": 368,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 253,
            "end": 274,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 253,
                "end": 262,
                "expression": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 262,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 270,
                "end": 273,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 270,
                  "end": 273,
                  "left": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 271,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 280,
            "end": 307,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 280,
                "end": 289,
                "expression": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 289,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 306,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 297,
                "end": 306,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 297,
                    "end": 300,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 297,
                      "end": 300,
                      "left": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 298,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 300,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 303,
                    "end": 306,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 303,
                      "end": 306,
                      "left": {
                        "type": "Identifier",
                        "start": 303,
                        "end": 304,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 306,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 313,
            "end": 332,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 313,
                "end": 322,
                "expression": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 322,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 330,
                "end": 331,
                "typeName": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 331,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 338,
            "end": 366,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 338,
                "end": 347,
                "expression": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 347,
                  "name": "PropDeco",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 353,
              "end": 365,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 355,
                "end": 365,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 355,
                    "end": 356,
                    "typeName": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 356,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 359,
                    "end": 365
                  }
                ]
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
