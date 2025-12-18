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
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 189,
                        "end": 196
                      },
                      "start": 187,
                      "end": 196
                    },
                    "start": 177,
                    "end": 196
                  },
                  "init": null,
                  "definite": false,
                  "start": 177,
                  "end": 196
                }
              ],
              "declare": false,
              "start": 173,
              "end": 197
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "condition1",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 216
              },
              "consequent": {
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
                          "name": "ChildComponent",
                          "start": 250,
                          "end": 264
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
                              "start": 269,
                              "end": 274
                            },
                            "start": 265,
                            "end": 275
                          }
                        ],
                        "selfClosing": true,
                        "start": 249,
                        "end": 278
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 249,
                      "end": 278
                    },
                    "start": 228,
                    "end": 289
                  }
                ],
                "start": 218,
                "end": 295
              },
              "alternate": {
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
                          "name": "ChildComponent",
                          "start": 324,
                          "end": 338
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
                              "start": 343,
                              "end": 348
                            },
                            "start": 339,
                            "end": 349
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "property1",
                              "start": 350,
                              "end": 359
                            },
                            "value": {
                              "type": "Literal",
                              "value": "NewString",
                              "raw": "\"NewString\"",
                              "start": 360,
                              "end": 371
                            },
                            "start": 350,
                            "end": 371
                          }
                        ],
                        "selfClosing": true,
                        "start": 323,
                        "end": 374
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 323,
                      "end": 374
                    },
                    "start": 315,
                    "end": 376
                  }
                ],
                "start": 305,
                "end": 382
              },
              "start": 202,
              "end": 382
            }
          ],
          "start": 167,
          "end": 384
        },
        "expression": false,
        "start": 125,
        "end": 384
      },
      "exportKind": "value",
      "start": 110,
      "end": 384
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 417
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
              "start": 424,
              "end": 433
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 435,
                "end": 441
              },
              "start": 433,
              "end": 441
            },
            "accessibility": null,
            "static": false,
            "start": 424,
            "end": 442
          }
        ],
        "start": 418,
        "end": 444
      },
      "declare": false,
      "start": 386,
      "end": 444
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChildComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 455,
        "end": 469
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
                "start": 472,
                "end": 481
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 481
              },
              "method": false,
              "shorthand": true,
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
                "name": "AnotherComponentProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 506
              },
              "typeArguments": null,
              "start": 485,
              "end": 506
            },
            "start": 483,
            "end": 506
          },
          "start": 470,
          "end": 506
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
                  "start": 532,
                  "end": 536
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 531,
                "end": 537
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
                    "start": 538,
                    "end": 547
                  },
                  "start": 537,
                  "end": 548
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 550,
                  "end": 554
                },
                "start": 548,
                "end": 555
              },
              "start": 531,
              "end": 555
            },
            "start": 514,
            "end": 562
          }
        ],
        "start": 508,
        "end": 564
      },
      "expression": false,
      "start": 446,
      "end": 564
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 564
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
    "value": "let",
    "start": 173,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "condition1",
    "start": 177,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 189,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "condition1",
    "start": 206,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250
  },
  {
    "type": "JSXIdentifier",
    "value": "ChildComponent",
    "start": 250,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 269,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 300,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 315,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 323,
    "end": 324
  },
  {
    "type": "JSXIdentifier",
    "value": "ChildComponent",
    "start": 324,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 343,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "JSXIdentifier",
    "value": "property1",
    "start": 350,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "JSXText",
    "value": "\"NewString\"",
    "start": 360,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 386,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "AnotherComponentProps",
    "start": 396,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 424,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 446,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "ChildComponent",
    "start": 455,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 472,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "AnotherComponentProps",
    "start": 485,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 531,
    "end": 532
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 532,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 538,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 549,
    "end": 550
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  }
]
```
