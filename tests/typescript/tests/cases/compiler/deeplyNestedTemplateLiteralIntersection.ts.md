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
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 9,
                "end": 12
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "a",
                  "cooked": "a"
                },
                "tail": true,
                "start": 18,
                "end": 21
              }
            ],
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 12,
                "end": 18
              }
            ],
            "start": 9,
            "end": 21
          },
          {
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
                  "name": "_thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 36
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 38,
                      "end": 42
                    },
                    "start": 38,
                    "end": 42
                  },
                  "start": 36,
                  "end": 42
                },
                "accessibility": null,
                "static": false,
                "start": 30,
                "end": 43
              }
            ],
            "start": 24,
            "end": 45
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
        "name": "_S",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 55
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 58,
              "end": 61
            },
            "start": 58,
            "end": 61
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "2",
              "raw": "\"2\"",
              "start": 64,
              "end": 67
            },
            "start": 64,
            "end": 67
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 70,
              "end": 73
            },
            "start": 70,
            "end": 73
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "4",
              "raw": "\"4\"",
              "start": 76,
              "end": 79
            },
            "start": 76,
            "end": 79
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "5",
              "raw": "\"5\"",
              "start": 82,
              "end": 85
            },
            "start": 82,
            "end": 85
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "6",
              "raw": "\"6\"",
              "start": 88,
              "end": 91
            },
            "start": 88,
            "end": 91
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "7",
              "raw": "\"7\"",
              "start": 94,
              "end": 97
            },
            "start": 94,
            "end": 97
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "8",
              "raw": "\"8\"",
              "start": 100,
              "end": 103
            },
            "start": 100,
            "end": 103
          }
        ],
        "start": 58,
        "end": 103
      },
      "declare": false,
      "start": 48,
      "end": 104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 115,
            "end": 118
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 120,
            "end": 123
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 125,
            "end": 127
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_S",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 120
            },
            "typeArguments": null,
            "start": 118,
            "end": 120
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_S",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "typeArguments": null,
            "start": 123,
            "end": 125
          }
        ],
        "start": 115,
        "end": 127
      },
      "declare": false,
      "start": 106,
      "end": 128
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
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
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "typeArguments": null,
            "start": 140,
            "end": 141
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 145
            },
            "typeArguments": null,
            "start": 144,
            "end": 145
          }
        ],
        "start": 140,
        "end": 145
      },
      "declare": false,
      "start": 131,
      "end": 146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 153
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 156,
            "end": 159
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 160,
            "end": 164
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 165,
            "end": 167
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "typeArguments": null,
            "start": 159,
            "end": 160
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "typeArguments": null,
            "start": 164,
            "end": 165
          }
        ],
        "start": 156,
        "end": 167
      },
      "declare": false,
      "start": 147,
      "end": 168
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 187
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 197
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 207,
                          "end": 208
                        },
                        "typeArguments": null,
                        "start": 207,
                        "end": 208
                      },
                      "start": 205,
                      "end": 208
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 204,
                    "end": 209
                  }
                ],
                "start": 198,
                "end": 211
              }
            ],
            "start": 197,
            "end": 212
          },
          "start": 190,
          "end": 212
        },
        "declare": false,
        "start": 177,
        "end": 213
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 170,
      "end": 213
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 230
                },
                "typeArguments": null,
                "start": 225,
                "end": 230
              },
              "start": 223,
              "end": 230
            },
            "start": 221,
            "end": 230
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 233,
            "end": 235
          },
          "definite": false,
          "start": 221,
          "end": 235
        }
      ],
      "declare": false,
      "start": 215,
      "end": 236
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 252
                },
                "typeArguments": null,
                "start": 247,
                "end": 252
              },
              "start": 245,
              "end": 252
            },
            "start": 243,
            "end": 252
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 255,
            "end": 257
          },
          "definite": false,
          "start": 243,
          "end": 257
        }
      ],
      "declare": false,
      "start": 237,
      "end": 258
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 277
                },
                "start": 272,
                "end": 277
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 284
                },
                "start": 279,
                "end": 284
              }
            ],
            "start": 270,
            "end": 286
          },
          "definite": false,
          "start": 266,
          "end": 286
        }
      ],
      "declare": false,
      "start": 260,
      "end": 287
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 299
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 299
          },
          "exportKind": "value",
          "start": 298,
          "end": 299
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 289,
      "end": 302
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 302
}
```
