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
                    "start": 223,
                    "end": 239
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
                        "start": 244,
                        "end": 249
                      },
                      "start": 240,
                      "end": 250
                    },
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Property1",
                        "start": 251,
                        "end": 260
                      },
                      "value": null,
                      "start": 251,
                      "end": 260
                    }
                  ],
                  "selfClosing": true,
                  "start": 222,
                  "end": 262
                },
                "children": [],
                "closingElement": null,
                "start": 222,
                "end": 262
              },
              "start": 173,
              "end": 269
            }
          ],
          "start": 167,
          "end": 271
        },
        "expression": false,
        "start": 125,
        "end": 271
      },
      "exportKind": "value",
      "start": 110,
      "end": 271
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 283,
        "end": 304
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
              "start": 311,
              "end": 320
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 322,
                "end": 328
              },
              "start": 320,
              "end": 328
            },
            "accessibility": null,
            "static": false,
            "start": 311,
            "end": 329
          }
        ],
        "start": 305,
        "end": 331
      },
      "declare": false,
      "start": 273,
      "end": 331
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 358
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
                "start": 361,
                "end": 370
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 370
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 361,
              "end": 370
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
                "start": 374,
                "end": 395
              },
              "typeArguments": null,
              "start": 374,
              "end": 395
            },
            "start": 372,
            "end": 395
          },
          "start": 359,
          "end": 395
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
                  "start": 421,
                  "end": 425
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 420,
                "end": 426
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
                    "start": 427,
                    "end": 436
                  },
                  "start": 426,
                  "end": 437
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 439,
                  "end": 443
                },
                "start": 437,
                "end": 444
              },
              "start": 420,
              "end": 444
            },
            "start": 403,
            "end": 451
          }
        ],
        "start": 397,
        "end": 453
      },
      "expression": false,
      "start": 333,
      "end": 453
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 453
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
    "start": 222,
    "end": 223
  },
  {
    "type": "JSXIdentifier",
    "value": "AnotherComponent",
    "start": 223,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 244,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "JSXIdentifier",
    "value": "Property1",
    "start": 251,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 273,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "AnotherComponentProps",
    "start": 283,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 311,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 333,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "AnotherComponent",
    "start": 342,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 361,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "AnotherComponentProps",
    "start": 374,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 427,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 438,
    "end": 439
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  }
]
```
