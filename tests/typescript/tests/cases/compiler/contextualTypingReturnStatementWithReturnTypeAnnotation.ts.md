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
        "name": "PropOfRaw",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 30
                },
                "typeArguments": null,
                "start": 29,
                "end": 30
              },
              "start": 29,
              "end": 32
            },
            "start": 20,
            "end": 32
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "not-array",
              "raw": "\"not-array\"",
              "start": 35,
              "end": 46
            },
            "start": 35,
            "end": 46
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "no-prop",
              "raw": "\"no-prop\"",
              "start": 49,
              "end": 58
            },
            "start": 49,
            "end": 58
          }
        ],
        "start": 20,
        "end": 58
      },
      "declare": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isString",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "text",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 93,
              "end": 100
            },
            "start": 91,
            "end": 100
          },
          "start": 87,
          "end": 100
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 111,
              "end": 117
            },
            "start": 111,
            "end": 117
          },
          "start": 103,
          "end": 117
        },
        "start": 101,
        "end": 117
      },
      "body": null,
      "expression": false,
      "start": 61,
      "end": 118
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getPropFromRaw",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 151
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 153
          }
        ],
        "start": 151,
        "end": 154
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "files",
                    "raw": "\"files\"",
                    "start": 164,
                    "end": 171
                  },
                  "start": 164,
                  "end": 171
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "include",
                    "raw": "\"include\"",
                    "start": 174,
                    "end": 183
                  },
                  "start": 174,
                  "end": 183
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "exclude",
                    "raw": "\"exclude\"",
                    "start": 186,
                    "end": 195
                  },
                  "start": 186,
                  "end": 195
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "references",
                    "raw": "\"references\"",
                    "start": 198,
                    "end": 210
                  },
                  "start": 198,
                  "end": 210
                }
              ],
              "start": 164,
              "end": 210
            },
            "start": 162,
            "end": 210
          },
          "start": 158,
          "end": 210
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "validateElement",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 239,
                      "end": 246
                    },
                    "start": 237,
                    "end": 246
                  },
                  "start": 232,
                  "end": 246
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 251,
                  "end": 258
                },
                "start": 248,
                "end": 258
              },
              "start": 231,
              "end": 258
            },
            "start": 229,
            "end": 258
          },
          "start": 214,
          "end": 258
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "elementTypeName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 279,
              "end": 285
            },
            "start": 277,
            "end": 285
          },
          "start": 262,
          "end": 285
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropOfRaw",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 298
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 300
                },
                "typeArguments": null,
                "start": 299,
                "end": 300
              }
            ],
            "start": 298,
            "end": 301
          },
          "start": 289,
          "end": 301
        },
        "start": 287,
        "end": 301
      },
      "body": null,
      "expression": false,
      "start": 120,
      "end": 302
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getSpecsFromRaw",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 328
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "files",
                    "raw": "\"files\"",
                    "start": 338,
                    "end": 345
                  },
                  "start": 338,
                  "end": 345
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "include",
                    "raw": "\"include\"",
                    "start": 348,
                    "end": 357
                  },
                  "start": 348,
                  "end": 357
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "exclude",
                    "raw": "\"exclude\"",
                    "start": 360,
                    "end": 369
                  },
                  "start": 360,
                  "end": 369
                }
              ],
              "start": 338,
              "end": 369
            },
            "start": 336,
            "end": 369
          },
          "start": 332,
          "end": 369
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropOfRaw",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 382
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 383,
                "end": 389
              }
            ],
            "start": 382,
            "end": 390
          },
          "start": 373,
          "end": 390
        },
        "start": 371,
        "end": 390
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getPropFromRaw",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 416
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 421
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 431
                },
                {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 433,
                  "end": 441
                }
              ],
              "optional": false,
              "start": 402,
              "end": 442
            },
            "start": 395,
            "end": 443
          }
        ],
        "start": 391,
        "end": 445
      },
      "expression": false,
      "start": 304,
      "end": 445
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 445
}
```
