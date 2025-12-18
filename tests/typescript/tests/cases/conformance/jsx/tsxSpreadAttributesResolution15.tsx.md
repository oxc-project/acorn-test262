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
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 58
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 65,
            "end": 83
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 97
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 99,
                "end": 105
              },
              "start": 97,
              "end": 105
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 106
          }
        ],
        "start": 59,
        "end": 108
      },
      "declare": false,
      "start": 34,
      "end": 108
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 143
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 165
                },
                "typeArguments": null,
                "start": 151,
                "end": 165
              },
              "start": 149,
              "end": 165
            },
            "start": 144,
            "end": 165
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherComponent",
                    "start": 191,
                    "end": 207
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXSpreadAttribute",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 212,
                        "end": 217
                      },
                      "start": 208,
                      "end": 218
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "property2",
                        "start": 219,
                        "end": 228
                      },
                      "value": null,
                      "start": 219,
                      "end": 228
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "AnotherProperty1",
                        "start": 229,
                        "end": 245
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "\"hi\"",
                        "start": 246,
                        "end": 250
                      },
                      "start": 229,
                      "end": 250
                    }
                  ],
                  "selfClosing": true,
                  "start": 190,
                  "end": 252
                },
                "children": [],
                "closingElement": null,
                "start": 190,
                "end": 252
              },
              "start": 173,
              "end": 259
            }
          ],
          "start": 167,
          "end": 261
        },
        "expression": false,
        "start": 125,
        "end": 261
      },
      "exportKind": "value",
      "start": 110,
      "end": 261
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 294
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 310
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 312,
                "end": 318
              },
              "start": 310,
              "end": 318
            },
            "accessibility": null,
            "static": false,
            "start": 301,
            "end": 319
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnotherProperty1",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 340
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              },
              "start": 340,
              "end": 348
            },
            "accessibility": null,
            "static": false,
            "start": 324,
            "end": 349
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 363
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 365,
                "end": 372
              },
              "start": 363,
              "end": 372
            },
            "accessibility": null,
            "static": false,
            "start": 354,
            "end": 373
          }
        ],
        "start": 295,
        "end": 375
      },
      "declare": false,
      "start": 263,
      "end": 375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 402
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 414
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 414
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 405,
              "end": 414
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
                "name": "AnotherComponentProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 439
              },
              "typeArguments": null,
              "start": 418,
              "end": 439
            },
            "start": 416,
            "end": 439
          },
          "start": 403,
          "end": 439
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 465,
                  "end": 469
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 464,
                "end": 470
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "property1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 480
                  },
                  "start": 470,
                  "end": 481
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 483,
                  "end": 487
                },
                "start": 481,
                "end": 488
              },
              "start": 464,
              "end": 488
            },
            "start": 447,
            "end": 495
          }
        ],
        "start": 441,
        "end": 497
      },
      "expression": false,
      "start": 377,
      "end": 497
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 497
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 44,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 65,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "property2",
    "start": 88,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 110,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 117,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 125,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 134,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 144,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 151,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 190,
    "end": 191
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherComponent",
    "start": 191,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "JSXIdentifier",
    "value": "property2",
    "start": 219,
    "end": 228
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherProperty1",
    "start": 229,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 263,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "AnotherComponentProps",
    "start": 273,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 301,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "AnotherProperty1",
    "start": 324,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "property2",
    "start": 354,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 365,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 377,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "AnotherComponent",
    "start": 386,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 405,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "AnotherComponentProps",
    "start": 418,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 464,
    "end": 465
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 465,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 471,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 482,
    "end": 483
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 483,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  }
]
```
