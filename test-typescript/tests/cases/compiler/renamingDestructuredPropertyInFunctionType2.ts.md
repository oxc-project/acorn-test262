__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 990,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 45,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 21,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 32,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 43,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 47,
      "end": 78,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 57,
        "end": 77,
        "params": [
          {
            "type": "Identifier",
            "start": 58,
            "end": 69,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 71,
          "end": 77,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 74,
            "end": 77
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 80,
      "end": 116,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 87,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 90,
        "end": 115,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 91,
            "end": 107,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 93,
                "end": 102,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 102,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 107,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 109,
          "end": 115,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 112,
            "end": 115
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 118,
      "end": 160,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 125,
        "decorators": [],
        "name": "F3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 128,
        "end": 159,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 129,
            "end": 151,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 131,
                "end": 140,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 140,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 142,
                "end": 143,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 145,
                "end": 146,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 150,
                "end": 151,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 153,
          "end": 159,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 156,
            "end": 159
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 162,
      "end": 198,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 169,
        "decorators": [],
        "name": "F4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 172,
        "end": 197,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 173,
            "end": 189,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 175,
                "end": 184,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 189,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 191,
          "end": 197,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 194,
            "end": 197
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 200,
      "end": 242,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 207,
        "decorators": [],
        "name": "F5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 210,
        "end": 241,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 211,
            "end": 233,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 213,
                "end": 222,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 222,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 224,
                "end": 225,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 227,
                "end": 228,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 233,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 233,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 235,
          "end": 241,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 238,
            "end": 241
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 244,
      "end": 287,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 251,
        "decorators": [],
        "name": "F6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 254,
        "end": 286,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 255,
            "end": 268,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 257,
                "end": 266,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 266,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 270,
          "end": 286,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 273,
            "end": 286,
            "exprName": {
              "type": "Identifier",
              "start": 280,
              "end": 286,
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 289,
      "end": 343,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 296,
        "decorators": [],
        "name": "F7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 299,
        "end": 342,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 300,
            "end": 324,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 302,
                "end": 311,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 311,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 313,
                "end": 322,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 322,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 326,
          "end": 342,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 329,
            "end": 342,
            "exprName": {
              "type": "Identifier",
              "start": 336,
              "end": 342,
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 345,
      "end": 391,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 352,
        "decorators": [],
        "name": "F8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 355,
        "end": 390,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 356,
            "end": 372,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 358,
                "end": 359,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 359,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 359,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 361,
                "end": 370,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 370,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 374,
          "end": 390,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 377,
            "end": 390,
            "exprName": {
              "type": "Identifier",
              "start": 384,
              "end": 390,
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 393,
      "end": 423,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 400,
        "decorators": [],
        "name": "F9",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 403,
        "end": 422,
        "params": [
          {
            "type": "ArrayPattern",
            "start": 404,
            "end": 413,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 405,
                "end": 406,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 408,
                "end": 409,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 411,
                "end": 412,
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
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 415,
          "end": 422,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 418,
            "end": 422
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 426,
      "end": 457,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 433,
        "decorators": [],
        "name": "G1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 436,
        "end": 456,
        "params": [
          {
            "type": "Identifier",
            "start": 437,
            "end": 448,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 448,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 442,
                "end": 448
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 450,
          "end": 456,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 453,
            "end": 456
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 459,
      "end": 495,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 466,
        "decorators": [],
        "name": "G2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 469,
        "end": 494,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 470,
            "end": 486,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 472,
                "end": 481,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 473,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 481,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 483,
              "end": 486,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 485,
                "end": 486,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 488,
          "end": 494,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 491,
            "end": 494
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 497,
      "end": 539,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 502,
        "end": 504,
        "decorators": [],
        "name": "G3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 507,
        "end": 538,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 508,
            "end": 530,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 510,
                "end": 519,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 511,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 519,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 521,
                "end": 522,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 522,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 522,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 524,
                "end": 525,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 525,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 525,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 529,
                "end": 530,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 530,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 532,
          "end": 538,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 535,
            "end": 538
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 541,
      "end": 577,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 548,
        "decorators": [],
        "name": "G4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 551,
        "end": 576,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 552,
            "end": 568,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 554,
                "end": 563,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 555,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 563,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 565,
              "end": 568,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 567,
                "end": 568,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 570,
          "end": 576,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 573,
            "end": 576
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 579,
      "end": 621,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 584,
        "end": 586,
        "decorators": [],
        "name": "G5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 589,
        "end": 620,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 590,
            "end": 612,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 592,
                "end": 601,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 593,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 601,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 603,
                "end": 604,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 606,
                "end": 607,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 606,
                  "end": 607,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 606,
                  "end": 607,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 609,
              "end": 612,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 611,
                "end": 612,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 612,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 614,
          "end": 620,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 617,
            "end": 620
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 623,
      "end": 666,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 628,
        "end": 630,
        "decorators": [],
        "name": "G6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 633,
        "end": 665,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 634,
            "end": 647,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 636,
                "end": 645,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 645,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 649,
          "end": 665,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 652,
            "end": 665,
            "exprName": {
              "type": "Identifier",
              "start": 659,
              "end": 665,
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 668,
      "end": 722,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 675,
        "decorators": [],
        "name": "G7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 678,
        "end": 721,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 679,
            "end": 703,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 681,
                "end": 690,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 682,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 690,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 692,
                "end": 701,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 693,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 701,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 705,
          "end": 721,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 708,
            "end": 721,
            "exprName": {
              "type": "Identifier",
              "start": 715,
              "end": 721,
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 724,
      "end": 770,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 729,
        "end": 731,
        "decorators": [],
        "name": "G8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 734,
        "end": 769,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 735,
            "end": 751,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 737,
                "end": 738,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 738,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 738,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 740,
                "end": 749,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 741,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 743,
                  "end": 749,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 753,
          "end": 769,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 756,
            "end": 769,
            "exprName": {
              "type": "Identifier",
              "start": 763,
              "end": 769,
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 772,
      "end": 802,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 779,
        "decorators": [],
        "name": "G9",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 782,
        "end": 801,
        "params": [
          {
            "type": "ArrayPattern",
            "start": 783,
            "end": 792,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 784,
                "end": 785,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 787,
                "end": 788,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 790,
                "end": 791,
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
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 794,
          "end": 801,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 797,
            "end": 801
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 805,
      "end": 988,
      "body": {
        "type": "TSInterfaceBody",
        "start": 817,
        "end": 988,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 821,
            "end": 847,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 821,
              "end": 828,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 829,
                "end": 840,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 832,
                  "end": 840,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 834,
                    "end": 840
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 841,
              "end": 846,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 843,
                "end": 846
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 851,
            "end": 879,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 851,
              "end": 858,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 859,
                "end": 872,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 861,
                    "end": 870,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 861,
                      "end": 862,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 870,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 873,
              "end": 878,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 875,
                "end": 878
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 884,
            "end": 903,
            "params": [
              {
                "type": "Identifier",
                "start": 885,
                "end": 896,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 888,
                  "end": 896,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 890,
                    "end": 896
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 897,
              "end": 902,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 899,
                "end": 902
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 907,
            "end": 928,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 908,
                "end": 921,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 910,
                    "end": 919,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 910,
                      "end": 911,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 913,
                      "end": 919,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 922,
              "end": 927,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 924,
                "end": 927
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 933,
            "end": 956,
            "params": [
              {
                "type": "Identifier",
                "start": 938,
                "end": 949,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 941,
                  "end": 949,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 943,
                    "end": 949
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 950,
              "end": 955,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 952,
                "end": 955
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 960,
            "end": 985,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 965,
                "end": 978,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 967,
                    "end": 976,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 967,
                      "end": 968,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 970,
                      "end": 976,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 979,
              "end": 984,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 981,
                "end": 984
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 815,
        "end": 816,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
