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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 63,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "decorators": [],
        "name": "PropDeco",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 32,
          "decorators": [],
          "name": "target",
          "optional": false,
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
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 34,
          "end": 58,
          "decorators": [],
          "name": "propKey",
          "optional": false,
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
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 76,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 76,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 198,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 119,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 92,
                "end": 101,
                "expression": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 101,
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                      "raw": "\"foo\"",
                      "value": "foo"
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
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 157,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 125,
                "end": 134,
                "expression": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 134,
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                      "raw": "true",
                      "value": true
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 163,
            "end": 196,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 163,
                "end": 172,
                "expression": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 172,
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                      "raw": "\"foo\"",
                      "value": "foo"
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 200,
      "end": 237,
      "body": {
        "type": "TSEnumBody",
        "start": 207,
        "end": 237,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 213,
            "end": 214,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 220,
            "end": 221,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 227,
            "end": 228,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 234,
            "end": 235,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 239,
      "end": 368,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 247,
        "end": 368,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 253,
            "end": 274,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 253,
                "end": 262,
                "expression": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 262,
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 280,
            "end": 307,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 280,
                "end": 289,
                "expression": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 289,
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                        "decorators": [],
                        "name": "E",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 300,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
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
                        "decorators": [],
                        "name": "E",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 306,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 313,
            "end": 332,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 313,
                "end": 322,
                "expression": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 322,
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 338,
            "end": 366,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 338,
                "end": 347,
                "expression": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 347,
                  "decorators": [],
                  "name": "PropDeco",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 359,
                    "end": 365
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 246,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
