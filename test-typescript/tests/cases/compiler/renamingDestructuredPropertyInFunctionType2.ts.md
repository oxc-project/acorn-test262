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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "O",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 45,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 21,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 43,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
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
      "start": 47,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "name": "F1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 57,
        "end": 77,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 58,
            "end": 69,
            "name": "arg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              }
            },
            "decorators": [],
            "optional": false
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 80,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 87,
        "name": "F2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 90,
        "end": 115,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 91,
            "end": 107,
            "properties": [
              {
                "type": "Property",
                "start": 93,
                "end": 102,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 102,
                  "name": "string",
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
              "start": 104,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 107,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 118,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 125,
        "name": "F3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 128,
        "end": 159,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 129,
            "end": 151,
            "properties": [
              {
                "type": "Property",
                "start": 131,
                "end": 140,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 140,
                  "name": "string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 142,
                "end": 143,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 145,
                "end": 146,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 150,
                "end": 151,
                "typeName": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 162,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 169,
        "name": "F4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 172,
        "end": 197,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 173,
            "end": 189,
            "properties": [
              {
                "type": "Property",
                "start": 175,
                "end": 184,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "name": "string",
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
              "start": 186,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 189,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 200,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 207,
        "name": "F5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 210,
        "end": 241,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 211,
            "end": 233,
            "properties": [
              {
                "type": "Property",
                "start": 213,
                "end": 222,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 222,
                  "name": "string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 224,
                "end": 225,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 227,
                "end": 228,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 233,
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 233,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 244,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 251,
        "name": "F6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 254,
        "end": 286,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 255,
            "end": 268,
            "properties": [
              {
                "type": "Property",
                "start": 257,
                "end": 266,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 266,
                  "name": "string",
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
              "name": "string",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 289,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 296,
        "name": "F7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 299,
        "end": 342,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 300,
            "end": 324,
            "properties": [
              {
                "type": "Property",
                "start": 302,
                "end": 311,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 311,
                  "name": "string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 313,
                "end": 322,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 322,
                  "name": "number",
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
              "name": "number",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 345,
      "end": 391,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 352,
        "name": "F8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 355,
        "end": 390,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 356,
            "end": 372,
            "properties": [
              {
                "type": "Property",
                "start": 358,
                "end": 359,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 359,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 359,
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
                "start": 361,
                "end": 370,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 362,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 370,
                  "name": "number",
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
              "name": "number",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 393,
      "end": 423,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 400,
        "name": "F9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 403,
        "end": 422,
        "typeParameters": null,
        "params": [
          {
            "type": "ArrayPattern",
            "start": 404,
            "end": 413,
            "elements": [
              {
                "type": "Identifier",
                "start": 405,
                "end": 406,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 408,
                "end": 409,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 426,
      "end": 457,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 433,
        "name": "G1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 436,
        "end": 456,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 437,
            "end": 448,
            "name": "arg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 448,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 442,
                "end": 448
              }
            },
            "decorators": [],
            "optional": false
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 459,
      "end": 495,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 466,
        "name": "G2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 469,
        "end": 494,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 470,
            "end": 486,
            "properties": [
              {
                "type": "Property",
                "start": 472,
                "end": 481,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 473,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 481,
                  "name": "string",
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
              "start": 483,
              "end": 486,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 485,
                "end": 486,
                "typeName": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 497,
      "end": 539,
      "id": {
        "type": "Identifier",
        "start": 502,
        "end": 504,
        "name": "G3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 507,
        "end": 538,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 508,
            "end": 530,
            "properties": [
              {
                "type": "Property",
                "start": 510,
                "end": 519,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 511,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 519,
                  "name": "string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 521,
                "end": 522,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 522,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 522,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 524,
                "end": 525,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 525,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 525,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 529,
                "end": 530,
                "typeName": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 530,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 541,
      "end": 577,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 548,
        "name": "G4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 551,
        "end": 576,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 552,
            "end": 568,
            "properties": [
              {
                "type": "Property",
                "start": 554,
                "end": 563,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 555,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 563,
                  "name": "string",
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
              "start": 565,
              "end": 568,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 567,
                "end": 568,
                "typeName": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 579,
      "end": 621,
      "id": {
        "type": "Identifier",
        "start": 584,
        "end": 586,
        "name": "G5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 589,
        "end": 620,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 590,
            "end": 612,
            "properties": [
              {
                "type": "Property",
                "start": 592,
                "end": 601,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 593,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 601,
                  "name": "string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 603,
                "end": 604,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 606,
                "end": 607,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 606,
                  "end": 607,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 606,
                  "end": 607,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 609,
              "end": 612,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 611,
                "end": 612,
                "typeName": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 612,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 623,
      "end": 666,
      "id": {
        "type": "Identifier",
        "start": 628,
        "end": 630,
        "name": "G6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 633,
        "end": 665,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 634,
            "end": 647,
            "properties": [
              {
                "type": "Property",
                "start": 636,
                "end": 645,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 645,
                  "name": "string",
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
              "name": "string",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 668,
      "end": 722,
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 675,
        "name": "G7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 678,
        "end": 721,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 679,
            "end": 703,
            "properties": [
              {
                "type": "Property",
                "start": 681,
                "end": 690,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 682,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 690,
                  "name": "string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 692,
                "end": 701,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 693,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 701,
                  "name": "number",
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
              "name": "number",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 724,
      "end": 770,
      "id": {
        "type": "Identifier",
        "start": 729,
        "end": 731,
        "name": "G8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 734,
        "end": 769,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 735,
            "end": 751,
            "properties": [
              {
                "type": "Property",
                "start": 737,
                "end": 738,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 738,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 738,
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
                "start": 740,
                "end": 749,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 741,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 743,
                  "end": 749,
                  "name": "number",
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
              "name": "number",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 772,
      "end": 802,
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 779,
        "name": "G9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 782,
        "end": 801,
        "typeParameters": null,
        "params": [
          {
            "type": "ArrayPattern",
            "start": 783,
            "end": 792,
            "elements": [
              {
                "type": "Identifier",
                "start": 784,
                "end": 785,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 787,
                "end": 788,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 790,
                "end": 791,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 805,
      "end": 988,
      "id": {
        "type": "Identifier",
        "start": 815,
        "end": 816,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 817,
        "end": 988,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 821,
            "end": 847,
            "key": {
              "type": "Identifier",
              "start": 821,
              "end": 828,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 829,
                "end": 840,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 832,
                  "end": 840,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 834,
                    "end": 840
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 851,
            "end": 879,
            "key": {
              "type": "Identifier",
              "start": 851,
              "end": 858,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 859,
                "end": 872,
                "properties": [
                  {
                    "type": "Property",
                    "start": 861,
                    "end": 870,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 861,
                      "end": 862,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 870,
                      "name": "string",
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
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 884,
            "end": 903,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 885,
                "end": 896,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 888,
                  "end": 896,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 890,
                    "end": 896
                  }
                },
                "decorators": [],
                "optional": false
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
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 907,
            "end": 928,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 908,
                "end": 921,
                "properties": [
                  {
                    "type": "Property",
                    "start": 910,
                    "end": 919,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 910,
                      "end": 911,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 913,
                      "end": 919,
                      "name": "string",
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
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 933,
            "end": 956,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 938,
                "end": 949,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 941,
                  "end": 949,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 943,
                    "end": 949
                  }
                },
                "decorators": [],
                "optional": false
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
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 960,
            "end": 985,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 965,
                "end": 978,
                "properties": [
                  {
                    "type": "Property",
                    "start": 967,
                    "end": 976,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 967,
                      "end": 968,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 970,
                      "end": 976,
                      "name": "string",
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
            }
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
