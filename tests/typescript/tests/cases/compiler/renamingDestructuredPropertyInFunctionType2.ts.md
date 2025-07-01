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
        "name": "O",
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
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              },
              "start": 12,
              "end": 20
            },
            "accessibility": null,
            "static": false,
            "start": 11,
            "end": 21
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 32
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 43
          }
        ],
        "start": 9,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 54
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
            },
            "start": 58,
            "end": 69
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 74,
            "end": 77
          },
          "start": 71,
          "end": 77
        },
        "start": 57,
        "end": 77
      },
      "declare": false,
      "start": 47,
      "end": 78
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 87
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 102
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 93,
                "end": 102
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 107
                },
                "typeArguments": null,
                "start": 106,
                "end": 107
              },
              "start": 104,
              "end": 107
            },
            "start": 91,
            "end": 107
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 112,
            "end": 115
          },
          "start": 109,
          "end": 115
        },
        "start": 90,
        "end": 115
      },
      "declare": false,
      "start": 80,
      "end": 116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F3",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 125
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 140
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 131,
                "end": 140
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 143
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 143
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 142,
                "end": 143
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 145,
                "end": 146
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 151
                },
                "typeArguments": null,
                "start": 150,
                "end": 151
              },
              "start": 148,
              "end": 151
            },
            "start": 129,
            "end": 151
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 156,
            "end": 159
          },
          "start": 153,
          "end": 159
        },
        "start": 128,
        "end": 159
      },
      "declare": false,
      "start": 118,
      "end": 160
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F4",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 169
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 176
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 184
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 175,
                "end": 184
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 189
                },
                "typeArguments": null,
                "start": 188,
                "end": 189
              },
              "start": 186,
              "end": 189
            },
            "start": 173,
            "end": 189
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 194,
            "end": 197
          },
          "start": 191,
          "end": 197
        },
        "start": 172,
        "end": 197
      },
      "declare": false,
      "start": 162,
      "end": 198
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F5",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 207
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 214
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 222
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 213,
                "end": 222
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 225
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 225
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 224,
                "end": 225
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 228
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 228
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 227,
                "end": 228
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 233
                },
                "typeArguments": null,
                "start": 232,
                "end": 233
              },
              "start": 230,
              "end": 233
            },
            "start": 211,
            "end": 233
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 238,
            "end": 241
          },
          "start": 235,
          "end": 241
        },
        "start": 210,
        "end": 241
      },
      "declare": false,
      "start": 200,
      "end": 242
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F6",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 251
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 266
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 257,
                "end": 266
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 268
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 286
            },
            "typeArguments": null,
            "start": 273,
            "end": 286
          },
          "start": 270,
          "end": 286
        },
        "start": 254,
        "end": 286
      },
      "declare": false,
      "start": 244,
      "end": 287
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F7",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 296
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 303
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 311
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 302,
                "end": 311
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 314
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 322
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 313,
                "end": 322
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 324
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 342
            },
            "typeArguments": null,
            "start": 329,
            "end": 342
          },
          "start": 326,
          "end": 342
        },
        "start": 299,
        "end": 342
      },
      "declare": false,
      "start": 289,
      "end": 343
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F8",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 352
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 358,
                  "end": 359
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 358,
                  "end": 359
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 358,
                "end": 359
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 362
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 370
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 361,
                "end": 370
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 372
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 390
            },
            "typeArguments": null,
            "start": 377,
            "end": 390
          },
          "start": 374,
          "end": 390
        },
        "start": 355,
        "end": 390
      },
      "declare": false,
      "start": 345,
      "end": 391
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F9",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 400
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 406
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 409
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 412
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 413
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 418,
            "end": 422
          },
          "start": 415,
          "end": 422
        },
        "start": 403,
        "end": 422
      },
      "declare": false,
      "start": 393,
      "end": 423
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G1",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 433
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 442,
                "end": 448
              },
              "start": 440,
              "end": 448
            },
            "start": 437,
            "end": 448
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 453,
            "end": 456
          },
          "start": 450,
          "end": 456
        },
        "start": 436,
        "end": 456
      },
      "declare": false,
      "start": 426,
      "end": 457
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G2",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 466
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 473
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 481
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 472,
                "end": 481
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 486
                },
                "typeArguments": null,
                "start": 485,
                "end": 486
              },
              "start": 483,
              "end": 486
            },
            "start": 470,
            "end": 486
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 491,
            "end": 494
          },
          "start": 488,
          "end": 494
        },
        "start": 469,
        "end": 494
      },
      "declare": false,
      "start": 459,
      "end": 495
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G3",
        "optional": false,
        "typeAnnotation": null,
        "start": 502,
        "end": 504
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 511
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 519
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 510,
                "end": 519
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 522
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 522
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 521,
                "end": 522
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 524,
                  "end": 525
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 524,
                  "end": 525
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 524,
                "end": 525
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 530
                },
                "typeArguments": null,
                "start": 529,
                "end": 530
              },
              "start": 527,
              "end": 530
            },
            "start": 508,
            "end": 530
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 535,
            "end": 538
          },
          "start": 532,
          "end": 538
        },
        "start": 507,
        "end": 538
      },
      "declare": false,
      "start": 497,
      "end": 539
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G4",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 548
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 555
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 563
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 554,
                "end": 563
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 568
                },
                "typeArguments": null,
                "start": 567,
                "end": 568
              },
              "start": 565,
              "end": 568
            },
            "start": 552,
            "end": 568
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 573,
            "end": 576
          },
          "start": 570,
          "end": 576
        },
        "start": 551,
        "end": 576
      },
      "declare": false,
      "start": 541,
      "end": 577
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G5",
        "optional": false,
        "typeAnnotation": null,
        "start": 584,
        "end": 586
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 593
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 601
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 592,
                "end": 601
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 604
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 604
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 603,
                "end": 604
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 606,
                  "end": 607
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 606,
                  "end": 607
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 606,
                "end": 607
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 611,
                  "end": 612
                },
                "typeArguments": null,
                "start": 611,
                "end": 612
              },
              "start": 609,
              "end": 612
            },
            "start": 590,
            "end": 612
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 617,
            "end": 620
          },
          "start": 614,
          "end": 620
        },
        "start": 589,
        "end": 620
      },
      "declare": false,
      "start": 579,
      "end": 621
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G6",
        "optional": false,
        "typeAnnotation": null,
        "start": 628,
        "end": 630
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 637
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 645
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 636,
                "end": 645
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 634,
            "end": 647
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 665
            },
            "typeArguments": null,
            "start": 652,
            "end": 665
          },
          "start": 649,
          "end": 665
        },
        "start": 633,
        "end": 665
      },
      "declare": false,
      "start": 623,
      "end": 666
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G7",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 675
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 681,
                  "end": 682
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 690
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 681,
                "end": 690
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 693
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 701
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 692,
                "end": 701
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 703
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 721
            },
            "typeArguments": null,
            "start": 708,
            "end": 721
          },
          "start": 705,
          "end": 721
        },
        "start": 678,
        "end": 721
      },
      "declare": false,
      "start": 668,
      "end": 722
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G8",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 731
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 737,
                  "end": 738
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 737,
                  "end": 738
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 737,
                "end": 738
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 740,
                  "end": 741
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 743,
                  "end": 749
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 740,
                "end": 749
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 751
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 763,
              "end": 769
            },
            "typeArguments": null,
            "start": 756,
            "end": 769
          },
          "start": 753,
          "end": 769
        },
        "start": 734,
        "end": 769
      },
      "declare": false,
      "start": 724,
      "end": 770
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G9",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 779
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 784,
                "end": 785
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 788
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 790,
                "end": 791
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 792
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 797,
            "end": 801
          },
          "start": 794,
          "end": 801
        },
        "start": 782,
        "end": 801
      },
      "declare": false,
      "start": 772,
      "end": 802
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 815,
        "end": 816
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 828
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 834,
                    "end": 840
                  },
                  "start": 832,
                  "end": 840
                },
                "start": 829,
                "end": 840
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 843,
                "end": 846
              },
              "start": 841,
              "end": 846
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 821,
            "end": 847
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 858
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 861,
                      "end": 862
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 864,
                      "end": 870
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 861,
                    "end": 870
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 859,
                "end": 872
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 875,
                "end": 878
              },
              "start": 873,
              "end": 878
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 851,
            "end": 879
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 890,
                    "end": 896
                  },
                  "start": 888,
                  "end": 896
                },
                "start": 885,
                "end": 896
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 899,
                "end": 902
              },
              "start": 897,
              "end": 902
            },
            "start": 884,
            "end": 903
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 910,
                      "end": 911
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 913,
                      "end": 919
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 910,
                    "end": 919
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 908,
                "end": 921
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 924,
                "end": 927
              },
              "start": 922,
              "end": 927
            },
            "start": 907,
            "end": 928
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 943,
                    "end": 949
                  },
                  "start": 941,
                  "end": 949
                },
                "start": 938,
                "end": 949
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 952,
                "end": 955
              },
              "start": 950,
              "end": 955
            },
            "start": 933,
            "end": 956
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 967,
                      "end": 968
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 970,
                      "end": 976
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 967,
                    "end": 976
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 965,
                "end": 978
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 981,
                "end": 984
              },
              "start": 979,
              "end": 984
            },
            "start": 960,
            "end": 985
          }
        ],
        "start": 817,
        "end": 988
      },
      "declare": false,
      "start": 805,
      "end": 988
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 989
}
```
