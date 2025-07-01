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
        "name": "BiomePlainLinkProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 100
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
              "name": "href",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
              },
              "start": 111,
              "end": 119
            },
            "accessibility": null,
            "static": false,
            "start": 107,
            "end": 120
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onClick",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 141,
                        "end": 147
                      },
                      "start": 139,
                      "end": 147
                    },
                    "start": 134,
                    "end": 147
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 152,
                    "end": 156
                  },
                  "start": 149,
                  "end": 156
                },
                "start": 133,
                "end": 156
              },
              "start": 131,
              "end": 156
            },
            "accessibility": null,
            "static": false,
            "start": 123,
            "end": 157
          }
        ],
        "start": 103,
        "end": 159
      },
      "declare": false,
      "start": 76,
      "end": 159
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BiomeButtonProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 182
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "href",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 193
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 196,
                "end": 201
              },
              "start": 194,
              "end": 201
            },
            "accessibility": null,
            "static": false,
            "start": 189,
            "end": 202
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onClick",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 212
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 223,
                        "end": 229
                      },
                      "start": 221,
                      "end": 229
                    },
                    "start": 216,
                    "end": 229
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 234,
                    "end": 238
                  },
                  "start": 231,
                  "end": 238
                },
                "start": 215,
                "end": 238
              },
              "start": 213,
              "end": 238
            },
            "accessibility": null,
            "static": false,
            "start": 205,
            "end": 239
          }
        ],
        "start": 185,
        "end": 241
      },
      "declare": false,
      "start": 161,
      "end": 241
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClickableDiscriminatedUnion",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 282
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
                "name": "BiomePlainLinkProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 308
              },
              "typeArguments": null,
              "start": 289,
              "end": 308
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BiomeButtonProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 329
              },
              "typeArguments": null,
              "start": 313,
              "end": 329
            }
          ],
          "start": 287,
          "end": 329
        },
        "declare": false,
        "start": 250,
        "end": 330
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 243,
      "end": 330
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClickableDiscriminatedUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 369
                },
                "typeArguments": null,
                "start": 342,
                "end": 369
              },
              "start": 340,
              "end": 369
            },
            "start": 338,
            "end": 369
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "href",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 380
                },
                "value": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "2",
                        "cooked": "2"
                      },
                      "tail": false,
                      "start": 382,
                      "end": 386
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "332132",
                        "cooked": "332132"
                      },
                      "tail": true,
                      "start": 395,
                      "end": 403
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 395
                    }
                  ],
                  "start": 382,
                  "end": 403
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 376,
                "end": 403
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onClick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 414
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ev",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 419
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 431
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 432,
                        "end": 435
                      },
                      "optional": false,
                      "computed": false,
                      "start": 424,
                      "end": 435
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "@@@@",
                        "raw": "'@@@@'",
                        "start": 436,
                        "end": 442
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ev",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 446
                      }
                    ],
                    "optional": false,
                    "start": 424,
                    "end": 447
                  },
                  "id": null,
                  "generator": false,
                  "start": 416,
                  "end": 447
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 407,
                "end": 447
              }
            ],
            "start": 372,
            "end": 450
          },
          "definite": false,
          "start": 338,
          "end": 450
        }
      ],
      "declare": false,
      "start": 332,
      "end": 450
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 76,
  "end": 450
}
```
