__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1388,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 12,
        "end": 48,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 24,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 35,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 46,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 46,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 39,
                "end": 46
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 51,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "name": "T00",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 62,
        "end": 90,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 65,
          "end": 79,
          "name": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSUnionType",
            "start": 70,
            "end": 79,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 70,
                "end": 73,
                "literal": {
                  "type": "Literal",
                  "start": 70,
                  "end": 73,
                  "value": "x",
                  "raw": "\"x\""
                }
              },
              {
                "type": "TSLiteralType",
                "start": 76,
                "end": 79,
                "literal": {
                  "type": "Literal",
                  "start": 76,
                  "end": 79,
                  "value": "y",
                  "raw": "\"y\""
                }
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 82,
          "end": 88
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSUnionType",
          "start": 70,
          "end": 79,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 70,
              "end": 73,
              "literal": {
                "type": "Literal",
                "start": 70,
                "end": 73,
                "value": "x",
                "raw": "\"x\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 76,
              "end": 79,
              "literal": {
                "type": "Literal",
                "start": 76,
                "end": 79,
                "value": "y",
                "raw": "\"y\""
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 92,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "name": "T01",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 103,
        "end": 126,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 106,
          "end": 120,
          "name": {
            "type": "Identifier",
            "start": 106,
            "end": 107,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSUnionType",
            "start": 111,
            "end": 120,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 111,
                "end": 114,
                "literal": {
                  "type": "Literal",
                  "start": 111,
                  "end": 114,
                  "value": "x",
                  "raw": "\"x\""
                }
              },
              {
                "type": "TSLiteralType",
                "start": 117,
                "end": 120,
                "literal": {
                  "type": "Literal",
                  "start": 117,
                  "end": 120,
                  "value": "y",
                  "raw": "\"y\""
                }
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 123,
          "end": 124,
          "typeName": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSUnionType",
          "start": 111,
          "end": 120,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 111,
              "end": 114,
              "literal": {
                "type": "Literal",
                "start": 111,
                "end": 114,
                "value": "x",
                "raw": "\"x\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 117,
              "end": 120,
              "literal": {
                "type": "Literal",
                "start": 117,
                "end": 120,
                "value": "y",
                "raw": "\"y\""
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 128,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 136,
        "name": "T02",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 139,
        "end": 169,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 142,
          "end": 156,
          "name": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSUnionType",
            "start": 147,
            "end": 156,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 147,
                "end": 150,
                "literal": {
                  "type": "Literal",
                  "start": 147,
                  "end": 150,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              {
                "type": "TSLiteralType",
                "start": 153,
                "end": 156,
                "literal": {
                  "type": "Literal",
                  "start": 153,
                  "end": 156,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 159,
          "end": 166,
          "objectType": {
            "type": "TSTypeReference",
            "start": 159,
            "end": 163,
            "typeName": {
              "type": "Identifier",
              "start": 159,
              "end": 163,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 164,
            "end": 165,
            "typeName": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSUnionType",
          "start": 147,
          "end": 156,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 147,
              "end": 150,
              "literal": {
                "type": "Literal",
                "start": 147,
                "end": 150,
                "value": "a",
                "raw": "\"a\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 153,
              "end": 156,
              "literal": {
                "type": "Literal",
                "start": 153,
                "end": 156,
                "value": "b",
                "raw": "\"b\""
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 170,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 178,
        "name": "T03",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 181,
        "end": 208,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 184,
          "end": 199,
          "name": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 189,
            "end": 199,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 195,
              "end": 199,
              "typeName": {
                "type": "Identifier",
                "start": 195,
                "end": 199,
                "name": "Item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 202,
          "end": 206,
          "typeName": {
            "type": "Identifier",
            "start": 202,
            "end": 206,
            "name": "Date",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 189,
          "end": 199,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 195,
            "end": 199,
            "typeName": {
              "type": "Identifier",
              "start": 195,
              "end": 199,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 184,
          "end": 185,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 211,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 219,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 222,
        "end": 252,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 225,
          "end": 240,
          "name": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 230,
            "end": 240,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 240,
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 240,
                "name": "Item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 243,
          "end": 250,
          "objectType": {
            "type": "TSTypeReference",
            "start": 243,
            "end": 247,
            "typeName": {
              "type": "Identifier",
              "start": 243,
              "end": 247,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 248,
            "end": 249,
            "typeName": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 230,
          "end": 240,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 236,
            "end": 240,
            "typeName": {
              "type": "Identifier",
              "start": 236,
              "end": 240,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 225,
          "end": 226,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 254,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 262,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 265,
        "end": 296,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 268,
          "end": 283,
          "name": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 273,
            "end": 283,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 279,
              "end": 283,
              "typeName": {
                "type": "Identifier",
                "start": 279,
                "end": 283,
                "name": "Item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 287,
          "end": 294,
          "objectType": {
            "type": "TSTypeReference",
            "start": 287,
            "end": 291,
            "typeName": {
              "type": "Identifier",
              "start": 287,
              "end": 291,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 292,
            "end": 293,
            "typeName": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": true,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 273,
          "end": 283,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 279,
            "end": 283,
            "typeName": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 268,
          "end": 269,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 298,
      "end": 349,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 306,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 309,
        "end": 348,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 321,
          "end": 336,
          "name": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 326,
            "end": 336,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 332,
              "end": 336,
              "typeName": {
                "type": "Identifier",
                "start": 332,
                "end": 336,
                "name": "Item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 339,
          "end": 346,
          "objectType": {
            "type": "TSTypeReference",
            "start": 339,
            "end": 343,
            "typeName": {
              "type": "Identifier",
              "start": 339,
              "end": 343,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 344,
            "end": 345,
            "typeName": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": true,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 326,
          "end": 336,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 332,
            "end": 336,
            "typeName": {
              "type": "Identifier",
              "start": 332,
              "end": 336,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 321,
          "end": 322,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 350,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 358,
        "name": "T13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 361,
        "end": 401,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 373,
          "end": 388,
          "name": {
            "type": "Identifier",
            "start": 373,
            "end": 374,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 378,
            "end": 388,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 384,
              "end": 388,
              "typeName": {
                "type": "Identifier",
                "start": 384,
                "end": 388,
                "name": "Item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 392,
          "end": 399,
          "objectType": {
            "type": "TSTypeReference",
            "start": 392,
            "end": 396,
            "typeName": {
              "type": "Identifier",
              "start": 392,
              "end": 396,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 397,
            "end": 398,
            "typeName": {
              "type": "Identifier",
              "start": 397,
              "end": 398,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": true,
        "readonly": true,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 378,
          "end": 388,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 384,
            "end": 388,
            "typeName": {
              "type": "Identifier",
              "start": 384,
              "end": 388,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 373,
          "end": 374,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 404,
      "end": 453,
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 412,
        "name": "T20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 415,
        "end": 452,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 418,
          "end": 433,
          "name": {
            "type": "Identifier",
            "start": 418,
            "end": 419,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 423,
            "end": 433,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 429,
              "end": 433,
              "typeName": {
                "type": "Identifier",
                "start": 429,
                "end": 433,
                "name": "Item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 436,
          "end": 450,
          "types": [
            {
              "type": "TSIndexedAccessType",
              "start": 436,
              "end": 443,
              "objectType": {
                "type": "TSTypeReference",
                "start": 436,
                "end": 440,
                "typeName": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 440,
                  "name": "Item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 441,
                "end": 442,
                "typeName": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 442,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSNullKeyword",
              "start": 446,
              "end": 450
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 423,
          "end": 433,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 429,
            "end": 433,
            "typeName": {
              "type": "Identifier",
              "start": 429,
              "end": 433,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 418,
          "end": 419,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 454,
      "end": 503,
      "id": {
        "type": "Identifier",
        "start": 459,
        "end": 462,
        "name": "T21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 465,
        "end": 502,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 468,
          "end": 483,
          "name": {
            "type": "Identifier",
            "start": 468,
            "end": 469,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 473,
            "end": 483,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 479,
              "end": 483,
              "typeName": {
                "type": "Identifier",
                "start": 479,
                "end": 483,
                "name": "Item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 486,
          "end": 500,
          "typeName": {
            "type": "Identifier",
            "start": 486,
            "end": 491,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 491,
            "end": 500,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 492,
                "end": 499,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 492,
                  "end": 496,
                  "typeName": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 496,
                    "name": "Item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 497,
                  "end": 498,
                  "typeName": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 498,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 473,
          "end": 483,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 479,
            "end": 483,
            "typeName": {
              "type": "Identifier",
              "start": 479,
              "end": 483,
              "name": "Item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 468,
          "end": 469,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 505,
      "end": 543,
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 513,
        "name": "T30",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 516,
        "end": 542,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 519,
          "end": 533,
          "name": {
            "type": "Identifier",
            "start": 519,
            "end": 520,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 524,
            "end": 533,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 530,
              "end": 533
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 536,
          "end": 540
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 524,
          "end": 533,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 530,
            "end": 533
          }
        },
        "key": {
          "type": "Identifier",
          "start": 519,
          "end": 520,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 544,
      "end": 585,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 552,
        "name": "T31",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 555,
        "end": 584,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 558,
          "end": 575,
          "name": {
            "type": "Identifier",
            "start": 558,
            "end": 559,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 563,
            "end": 575,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 569,
              "end": 575
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 578,
          "end": 582
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 563,
          "end": 575,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 569,
            "end": 575
          }
        },
        "key": {
          "type": "Identifier",
          "start": 558,
          "end": 559,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 586,
      "end": 627,
      "id": {
        "type": "Identifier",
        "start": 591,
        "end": 594,
        "name": "T32",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 597,
        "end": 626,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 600,
          "end": 617,
          "name": {
            "type": "Identifier",
            "start": 600,
            "end": 601,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 605,
            "end": 617,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 611,
              "end": 617
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 620,
          "end": 624
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 605,
          "end": 617,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 611,
            "end": 617
          }
        },
        "key": {
          "type": "Identifier",
          "start": 600,
          "end": 601,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 628,
      "end": 670,
      "id": {
        "type": "Identifier",
        "start": 633,
        "end": 636,
        "name": "T33",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 639,
        "end": 669,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 642,
          "end": 660,
          "name": {
            "type": "Identifier",
            "start": 642,
            "end": 643,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 647,
            "end": 660,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 653,
              "end": 660
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 663,
          "end": 667
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 647,
          "end": 660,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 653,
            "end": 660
          }
        },
        "key": {
          "type": "Identifier",
          "start": 642,
          "end": 643,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 671,
      "end": 715,
      "id": {
        "type": "Identifier",
        "start": 676,
        "end": 679,
        "name": "T34",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 682,
        "end": 714,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 685,
          "end": 705,
          "name": {
            "type": "Identifier",
            "start": 685,
            "end": 686,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 690,
            "end": 705,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 696,
              "end": 705
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 708,
          "end": 712
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 690,
          "end": 705,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSUndefinedKeyword",
            "start": 696,
            "end": 705
          }
        },
        "key": {
          "type": "Identifier",
          "start": 685,
          "end": 686,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 716,
      "end": 755,
      "id": {
        "type": "Identifier",
        "start": 721,
        "end": 724,
        "name": "T35",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 727,
        "end": 754,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 730,
          "end": 745,
          "name": {
            "type": "Identifier",
            "start": 730,
            "end": 731,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 735,
            "end": 745,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSNullKeyword",
              "start": 741,
              "end": 745
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 748,
          "end": 752
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 735,
          "end": 745,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNullKeyword",
            "start": 741,
            "end": 745
          }
        },
        "key": {
          "type": "Identifier",
          "start": 730,
          "end": 731,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 756,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 761,
        "end": 764,
        "name": "T36",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 767,
        "end": 794,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 770,
          "end": 785,
          "name": {
            "type": "Identifier",
            "start": 770,
            "end": 771,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 775,
            "end": 785,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 781,
              "end": 785
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 788,
          "end": 792
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 775,
          "end": 785,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 781,
            "end": 785
          }
        },
        "key": {
          "type": "Identifier",
          "start": 770,
          "end": 771,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 796,
      "end": 837,
      "id": {
        "type": "Identifier",
        "start": 801,
        "end": 804,
        "name": "T37",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 807,
        "end": 836,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 810,
          "end": 827,
          "name": {
            "type": "Identifier",
            "start": 810,
            "end": 811,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 815,
            "end": 827,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSSymbolKeyword",
              "start": 821,
              "end": 827
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 830,
          "end": 834
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 815,
          "end": 827,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSSymbolKeyword",
            "start": 821,
            "end": 827
          }
        },
        "key": {
          "type": "Identifier",
          "start": 810,
          "end": 811,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 838,
      "end": 878,
      "id": {
        "type": "Identifier",
        "start": 843,
        "end": 846,
        "name": "T38",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 849,
        "end": 877,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 852,
          "end": 868,
          "name": {
            "type": "Identifier",
            "start": 852,
            "end": 853,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 857,
            "end": 868,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 863,
              "end": 868
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 871,
          "end": 875
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 857,
          "end": 868,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 863,
            "end": 868
          }
        },
        "key": {
          "type": "Identifier",
          "start": 852,
          "end": 853,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 880,
      "end": 915,
      "id": {
        "type": "Identifier",
        "start": 885,
        "end": 888,
        "name": "T40",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 891,
        "end": 914,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 894,
          "end": 905,
          "name": {
            "type": "Identifier",
            "start": 894,
            "end": 895,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSStringKeyword",
            "start": 899,
            "end": 905
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 908,
          "end": 912
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSStringKeyword",
          "start": 899,
          "end": 905
        },
        "key": {
          "type": "Identifier",
          "start": 894,
          "end": 895,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 916,
      "end": 954,
      "id": {
        "type": "Identifier",
        "start": 921,
        "end": 924,
        "name": "T43",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 927,
        "end": 953,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 930,
          "end": 944,
          "name": {
            "type": "Identifier",
            "start": 930,
            "end": 931,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSUnionType",
            "start": 935,
            "end": 944,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 935,
                "end": 938,
                "literal": {
                  "type": "Literal",
                  "start": 935,
                  "end": 938,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              {
                "type": "TSLiteralType",
                "start": 941,
                "end": 944,
                "literal": {
                  "type": "Literal",
                  "start": 941,
                  "end": 944,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 947,
          "end": 951
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSUnionType",
          "start": 935,
          "end": 944,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 935,
              "end": 938,
              "literal": {
                "type": "Literal",
                "start": 935,
                "end": 938,
                "value": "a",
                "raw": "\"a\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 941,
              "end": 944,
              "literal": {
                "type": "Literal",
                "start": 941,
                "end": 944,
                "value": "b",
                "raw": "\"b\""
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 930,
          "end": 931,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 955,
      "end": 1005,
      "id": {
        "type": "Identifier",
        "start": 960,
        "end": 963,
        "name": "T44",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 966,
        "end": 1004,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 969,
          "end": 995,
          "name": {
            "type": "Identifier",
            "start": 969,
            "end": 970,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSUnionType",
            "start": 974,
            "end": 995,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 974,
                "end": 977,
                "literal": {
                  "type": "Literal",
                  "start": 974,
                  "end": 977,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              {
                "type": "TSLiteralType",
                "start": 980,
                "end": 983,
                "literal": {
                  "type": "Literal",
                  "start": 980,
                  "end": 983,
                  "value": "b",
                  "raw": "\"b\""
                }
              },
              {
                "type": "TSLiteralType",
                "start": 986,
                "end": 989,
                "literal": {
                  "type": "Literal",
                  "start": 986,
                  "end": 989,
                  "value": "0",
                  "raw": "\"0\""
                }
              },
              {
                "type": "TSLiteralType",
                "start": 992,
                "end": 995,
                "literal": {
                  "type": "Literal",
                  "start": 992,
                  "end": 995,
                  "value": "1",
                  "raw": "\"1\""
                }
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 998,
          "end": 1002
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSUnionType",
          "start": 974,
          "end": 995,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 974,
              "end": 977,
              "literal": {
                "type": "Literal",
                "start": 974,
                "end": 977,
                "value": "a",
                "raw": "\"a\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 980,
              "end": 983,
              "literal": {
                "type": "Literal",
                "start": 980,
                "end": 983,
                "value": "b",
                "raw": "\"b\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 986,
              "end": 989,
              "literal": {
                "type": "Literal",
                "start": 986,
                "end": 989,
                "value": "0",
                "raw": "\"0\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 992,
              "end": 995,
              "literal": {
                "type": "Literal",
                "start": 992,
                "end": 995,
                "value": "1",
                "raw": "\"1\""
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 969,
          "end": 970,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1006,
      "end": 1065,
      "id": {
        "type": "Identifier",
        "start": 1011,
        "end": 1014,
        "name": "T47",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1017,
        "end": 1064,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1020,
          "end": 1055,
          "name": {
            "type": "Identifier",
            "start": 1020,
            "end": 1021,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSUnionType",
            "start": 1025,
            "end": 1055,
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 1025,
                "end": 1031
              },
              {
                "type": "TSLiteralType",
                "start": 1034,
                "end": 1037,
                "literal": {
                  "type": "Literal",
                  "start": 1034,
                  "end": 1037,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              {
                "type": "TSLiteralType",
                "start": 1040,
                "end": 1043,
                "literal": {
                  "type": "Literal",
                  "start": 1040,
                  "end": 1043,
                  "value": "b",
                  "raw": "\"b\""
                }
              },
              {
                "type": "TSLiteralType",
                "start": 1046,
                "end": 1049,
                "literal": {
                  "type": "Literal",
                  "start": 1046,
                  "end": 1049,
                  "value": "0",
                  "raw": "\"0\""
                }
              },
              {
                "type": "TSLiteralType",
                "start": 1052,
                "end": 1055,
                "literal": {
                  "type": "Literal",
                  "start": 1052,
                  "end": 1055,
                  "value": "1",
                  "raw": "\"1\""
                }
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1058,
          "end": 1062
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSUnionType",
          "start": 1025,
          "end": 1055,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 1025,
              "end": 1031
            },
            {
              "type": "TSLiteralType",
              "start": 1034,
              "end": 1037,
              "literal": {
                "type": "Literal",
                "start": 1034,
                "end": 1037,
                "value": "a",
                "raw": "\"a\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1040,
              "end": 1043,
              "literal": {
                "type": "Literal",
                "start": 1040,
                "end": 1043,
                "value": "b",
                "raw": "\"b\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1046,
              "end": 1049,
              "literal": {
                "type": "Literal",
                "start": 1046,
                "end": 1049,
                "value": "0",
                "raw": "\"0\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1052,
              "end": 1055,
              "literal": {
                "type": "Literal",
                "start": 1052,
                "end": 1055,
                "value": "1",
                "raw": "\"1\""
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 1020,
          "end": 1021,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1067,
      "end": 1120,
      "id": {
        "type": "Identifier",
        "start": 1084,
        "end": 1086,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1086,
        "end": 1090,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1087,
            "end": 1089,
            "name": {
              "type": "Identifier",
              "start": 1087,
              "end": 1089,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1092,
        "end": 1119,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1094,
          "end": 1119,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 1097,
            "end": 1110,
            "name": {
              "type": "Identifier",
              "start": 1097,
              "end": 1098,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1102,
              "end": 1110,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1108,
                "end": 1110,
                "typeName": {
                  "type": "Identifier",
                  "start": 1108,
                  "end": 1110,
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1113,
            "end": 1117
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1102,
            "end": 1110,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1108,
              "end": 1110,
              "typeName": {
                "type": "Identifier",
                "start": 1108,
                "end": 1110,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1097,
            "end": 1098,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1121,
      "end": 1189,
      "id": {
        "type": "Identifier",
        "start": 1138,
        "end": 1140,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1140,
        "end": 1159,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1141,
            "end": 1158,
            "name": {
              "type": "Identifier",
              "start": 1141,
              "end": 1143,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1152,
              "end": 1158
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1161,
        "end": 1188,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1163,
          "end": 1188,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 1166,
            "end": 1179,
            "name": {
              "type": "Identifier",
              "start": 1166,
              "end": 1167,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1171,
              "end": 1179,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1177,
                "end": 1179,
                "typeName": {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1179,
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1182,
            "end": 1186
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1171,
            "end": 1179,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1177,
              "end": 1179,
              "typeName": {
                "type": "Identifier",
                "start": 1177,
                "end": 1179,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1166,
            "end": 1167,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1190,
      "end": 1258,
      "id": {
        "type": "Identifier",
        "start": 1207,
        "end": 1209,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1209,
        "end": 1228,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1210,
            "end": 1227,
            "name": {
              "type": "Identifier",
              "start": 1210,
              "end": 1212,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1221,
              "end": 1227
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1230,
        "end": 1257,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1232,
          "end": 1257,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 1235,
            "end": 1248,
            "name": {
              "type": "Identifier",
              "start": 1235,
              "end": 1236,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1240,
              "end": 1248,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1246,
                "end": 1248,
                "typeName": {
                  "type": "Identifier",
                  "start": 1246,
                  "end": 1248,
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1251,
            "end": 1255
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1240,
            "end": 1248,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1246,
              "end": 1248,
              "typeName": {
                "type": "Identifier",
                "start": 1246,
                "end": 1248,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1235,
            "end": 1236,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1259,
      "end": 1327,
      "id": {
        "type": "Identifier",
        "start": 1276,
        "end": 1278,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1278,
        "end": 1297,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1279,
            "end": 1296,
            "name": {
              "type": "Identifier",
              "start": 1279,
              "end": 1281,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1290,
              "end": 1296,
              "typeName": {
                "type": "Identifier",
                "start": 1290,
                "end": 1296,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1299,
        "end": 1326,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1301,
          "end": 1326,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 1304,
            "end": 1317,
            "name": {
              "type": "Identifier",
              "start": 1304,
              "end": 1305,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1309,
              "end": 1317,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1315,
                "end": 1317,
                "typeName": {
                  "type": "Identifier",
                  "start": 1315,
                  "end": 1317,
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1320,
            "end": 1324
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1309,
            "end": 1317,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1315,
              "end": 1317,
              "typeName": {
                "type": "Identifier",
                "start": 1315,
                "end": 1317,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1304,
            "end": 1305,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1329,
      "end": 1343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1333,
          "end": 1342,
          "id": {
            "type": "Identifier",
            "start": 1333,
            "end": 1335,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1338,
            "end": 1342,
            "callee": {
              "type": "Identifier",
              "start": 1338,
              "end": 1340,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1344,
      "end": 1358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1348,
          "end": 1357,
          "id": {
            "type": "Identifier",
            "start": 1348,
            "end": 1350,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1353,
            "end": 1357,
            "callee": {
              "type": "Identifier",
              "start": 1353,
              "end": 1355,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1359,
      "end": 1373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1363,
          "end": 1372,
          "id": {
            "type": "Identifier",
            "start": 1363,
            "end": 1365,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1368,
            "end": 1372,
            "callee": {
              "type": "Identifier",
              "start": 1368,
              "end": 1370,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1374,
      "end": 1388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1378,
          "end": 1387,
          "id": {
            "type": "Identifier",
            "start": 1378,
            "end": 1380,
            "name": "x4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1383,
            "end": 1387,
            "callee": {
              "type": "Identifier",
              "start": 1383,
              "end": 1385,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
