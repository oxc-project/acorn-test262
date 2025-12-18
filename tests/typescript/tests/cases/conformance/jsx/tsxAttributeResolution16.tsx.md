__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Address",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 51
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
              "type": "Identifier",
              "decorators": [],
              "name": "street",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 71
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "country",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 90
          }
        ],
        "start": 52,
        "end": 92
      },
      "declare": false,
      "start": 34,
      "end": 92
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CanadianAddress",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 119
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Address",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 135
          },
          "typeArguments": null,
          "start": 128,
          "end": 135
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "postalCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 142,
            "end": 161
          }
        ],
        "start": 136,
        "end": 163
      },
      "declare": false,
      "start": 94,
      "end": 163
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmericanAddress",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 190
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Address",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 206
          },
          "typeArguments": null,
          "start": 199,
          "end": 206
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zipCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 220
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 222,
                "end": 228
              },
              "start": 220,
              "end": 228
            },
            "accessibility": null,
            "static": false,
            "start": 213,
            "end": 229
          }
        ],
        "start": 207,
        "end": 231
      },
      "declare": false,
      "start": 165,
      "end": 231
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 248
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanadianAddress",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 266
            },
            "typeArguments": null,
            "start": 251,
            "end": 266
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AmericanAddress",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 284
            },
            "typeArguments": null,
            "start": 269,
            "end": 284
          }
        ],
        "start": 251,
        "end": 284
      },
      "declare": false,
      "start": 233,
      "end": 285
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddressComp",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 311
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 325
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 335
          },
          "optional": false,
          "computed": false,
          "start": 320,
          "end": 335
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Properties",
                "optional": false,
                "typeAnnotation": null,
                "start": 336,
                "end": 346
              },
              "typeArguments": null,
              "start": 336,
              "end": 346
            },
            {
              "type": "TSVoidKeyword",
              "start": 348,
              "end": 352
            }
          ],
          "start": 335,
          "end": 353
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 371
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 387,
                        "end": 391
                      },
                      "start": 380,
                      "end": 392
                    }
                  ],
                  "start": 374,
                  "end": 396
                },
                "expression": false,
                "start": 371,
                "end": 396
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 358,
              "end": 396
            }
          ],
          "start": 354,
          "end": 398
        },
        "abstract": false,
        "declare": false,
        "start": 294,
        "end": 398
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 287,
      "end": 398
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 405
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "AddressComp",
                "start": 409,
                "end": 420
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "postalCode",
                    "start": 421,
                    "end": 431
                  },
                  "value": {
                    "type": "Literal",
                    "value": "T1B 0L3",
                    "raw": "'T1B 0L3'",
                    "start": 432,
                    "end": 441
                  },
                  "start": 421,
                  "end": 441
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "street",
                    "start": 442,
                    "end": 448
                  },
                  "value": {
                    "type": "Literal",
                    "value": "vancouver",
                    "raw": "\"vancouver\"",
                    "start": 449,
                    "end": 460
                  },
                  "start": 442,
                  "end": 460
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "country",
                    "start": 461,
                    "end": 468
                  },
                  "value": {
                    "type": "Literal",
                    "value": "CA",
                    "raw": "\"CA\"",
                    "start": 469,
                    "end": 473
                  },
                  "start": 461,
                  "end": 473
                }
              ],
              "selfClosing": true,
              "start": 408,
              "end": 476
            },
            "children": [],
            "closingElement": null,
            "start": 408,
            "end": 476
          },
          "definite": false,
          "start": 404,
          "end": 476
        }
      ],
      "declare": false,
      "start": 400,
      "end": 476
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 476
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22,
    "range": [
      15,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43,
    "range": [
      34,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "Address",
    "start": 44,
    "end": 51,
    "range": [
      44,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "street",
    "start": 56,
    "end": 62,
    "range": [
      56,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "country",
    "start": 74,
    "end": 81,
    "range": [
      74,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 94,
    "end": 103,
    "range": [
      94,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "CanadianAddress",
    "start": 104,
    "end": 119,
    "range": [
      104,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 120,
    "end": 127,
    "range": [
      120,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "Address",
    "start": 128,
    "end": 135,
    "range": [
      128,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "postalCode",
    "start": 142,
    "end": 152,
    "range": [
      142,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 154,
    "end": 160,
    "range": [
      154,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 165,
    "end": 174,
    "range": [
      165,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "AmericanAddress",
    "start": 175,
    "end": 190,
    "range": [
      175,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 191,
    "end": 198,
    "range": [
      191,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "Address",
    "start": 199,
    "end": 206,
    "range": [
      199,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "zipCode",
    "start": 213,
    "end": 220,
    "range": [
      213,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 222,
    "end": 228,
    "range": [
      222,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 233,
    "end": 237,
    "range": [
      233,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 238,
    "end": 248,
    "range": [
      238,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "CanadianAddress",
    "start": 251,
    "end": 266,
    "range": [
      251,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "AmericanAddress",
    "start": 269,
    "end": 284,
    "range": [
      269,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 287,
    "end": 293,
    "range": [
      287,
      293
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 294,
    "end": 299,
    "range": [
      294,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "AddressComp",
    "start": 300,
    "end": 311,
    "range": [
      300,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 312,
    "end": 319,
    "range": [
      312,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 320,
    "end": 325,
    "range": [
      320,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 326,
    "end": 335,
    "range": [
      326,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 336,
    "end": 346,
    "range": [
      336,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 348,
    "end": 352,
    "range": [
      348,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 358,
    "end": 364,
    "range": [
      358,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 365,
    "end": 371,
    "range": [
      365,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 380,
    "end": 386,
    "range": [
      380,
      386
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 387,
    "end": 391,
    "range": [
      387,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 400,
    "end": 403,
    "range": [
      400,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "AddressComp",
    "start": 409,
    "end": 420,
    "range": [
      409,
      420
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "postalCode",
    "start": 421,
    "end": 431,
    "range": [
      421,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "JSXText",
    "value": "'T1B 0L3'",
    "start": 432,
    "end": 441,
    "range": [
      432,
      441
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "street",
    "start": 442,
    "end": 448,
    "range": [
      442,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "JSXText",
    "value": "\"vancouver\"",
    "start": 449,
    "end": 460,
    "range": [
      449,
      460
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "country",
    "start": 461,
    "end": 468,
    "range": [
      461,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "JSXText",
    "value": "\"CA\"",
    "start": 469,
    "end": 473,
    "range": [
      469,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  }
]
```
