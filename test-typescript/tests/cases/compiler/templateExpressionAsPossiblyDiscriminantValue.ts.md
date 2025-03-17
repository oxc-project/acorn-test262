__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 76,
  "end": 451,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 76,
      "end": 159,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 100,
        "decorators": [],
        "name": "BiomePlainLinkProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 103,
        "end": 159,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 107,
            "end": 120,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 111,
              "decorators": [],
              "name": "href",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 123,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 130,
              "decorators": [],
              "name": "onClick",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 156,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 133,
                "end": 156,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 134,
                    "end": 147,
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 141,
                        "end": 147
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 149,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 152,
                    "end": 156
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 161,
      "end": 241,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 182,
        "decorators": [],
        "name": "BiomeButtonProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 185,
        "end": 241,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 189,
            "end": 202,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 193,
              "decorators": [],
              "name": "href",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 201,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 196,
                "end": 201
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 205,
            "end": 239,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 212,
              "decorators": [],
              "name": "onClick",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 238,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 215,
                "end": 238,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 216,
                    "end": 229,
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 221,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 223,
                        "end": 229
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 231,
                  "end": 238,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 234,
                    "end": 238
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 330,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 250,
        "end": 330,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 255,
          "end": 282,
          "decorators": [],
          "name": "ClickableDiscriminatedUnion",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 287,
          "end": 329,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 289,
              "end": 308,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 289,
                "end": 308,
                "decorators": [],
                "name": "BiomePlainLinkProps",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 313,
              "end": 329,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 313,
                "end": 329,
                "decorators": [],
                "name": "BiomeButtonProps",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 450,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 369,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 369,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 342,
                "end": 369,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 369,
                  "decorators": [],
                  "name": "ClickableDiscriminatedUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 372,
            "end": 450,
            "properties": [
              {
                "type": "Property",
                "start": 376,
                "end": 403,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 380,
                  "decorators": [],
                  "name": "href",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TemplateLiteral",
                  "start": 382,
                  "end": 403,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 386,
                      "end": 395,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 382,
                      "end": 386,
                      "tail": false,
                      "value": {
                        "cooked": "2",
                        "raw": "2"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 395,
                      "end": 403,
                      "tail": true,
                      "value": {
                        "cooked": "332132",
                        "raw": "332132"
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 407,
                "end": 447,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 414,
                  "decorators": [],
                  "name": "onClick",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 416,
                  "end": 447,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 424,
                    "end": 447,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 436,
                        "end": 442,
                        "raw": "'@@@@'",
                        "value": "@@@@"
                      },
                      {
                        "type": "Identifier",
                        "start": 444,
                        "end": 446,
                        "decorators": [],
                        "name": "ev",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 424,
                      "end": 435,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 424,
                        "end": 431,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 435,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 417,
                      "end": 419,
                      "decorators": [],
                      "name": "ev",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
