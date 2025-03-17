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
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 100,
        "name": "BiomePlainLinkProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 103,
        "end": 159,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 107,
            "end": 120,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 111,
              "name": "href",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 123,
            "end": 157,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 130,
              "name": "onClick",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 156,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 133,
                "end": 156,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 134,
                    "end": 147,
                    "name": "event",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 141,
                        "end": 147
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
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
      "start": 161,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 182,
        "name": "BiomeButtonProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 185,
        "end": 241,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 189,
            "end": 202,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 193,
              "name": "href",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 201,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 196,
                "end": 201
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 205,
            "end": 239,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 212,
              "name": "onClick",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 238,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 215,
                "end": 238,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 216,
                    "end": 229,
                    "name": "event",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 221,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 223,
                        "end": 229
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
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
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 330,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 250,
        "end": 330,
        "id": {
          "type": "Identifier",
          "start": 255,
          "end": 282,
          "name": "ClickableDiscriminatedUnion",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 287,
          "end": 329,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 289,
              "end": 308,
              "typeName": {
                "type": "Identifier",
                "start": 289,
                "end": 308,
                "name": "BiomePlainLinkProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 313,
              "end": 329,
              "typeName": {
                "type": "Identifier",
                "start": 313,
                "end": 329,
                "name": "BiomeButtonProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 369,
            "name": "p3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 369,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 342,
                "end": 369,
                "typeName": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 369,
                  "name": "ClickableDiscriminatedUnion",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 380,
                  "name": "href",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TemplateLiteral",
                  "start": 382,
                  "end": 403,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 386,
                      "end": 395,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 382,
                      "end": 386,
                      "value": {
                        "cooked": "2",
                        "raw": "2"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 395,
                      "end": 403,
                      "value": {
                        "cooked": "332132",
                        "raw": "332132"
                      },
                      "tail": true
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 407,
                "end": 447,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 414,
                  "name": "onClick",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 416,
                  "end": 447,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 417,
                      "end": 419,
                      "name": "ev",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "start": 424,
                    "end": 447,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 424,
                      "end": 435,
                      "object": {
                        "type": "Identifier",
                        "start": 424,
                        "end": 431,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 435,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 436,
                        "end": 442,
                        "value": "@@@@",
                        "raw": "'@@@@'"
                      },
                      {
                        "type": "Identifier",
                        "start": 444,
                        "end": 446,
                        "name": "ev",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
