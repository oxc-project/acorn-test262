__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 303,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "R",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 9,
        "end": 45,
        "types": [
          {
            "type": "TSTemplateLiteralType",
            "start": 9,
            "end": 21,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 9,
                "end": 12,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 18,
                "end": 21,
                "value": {
                  "cooked": "a",
                  "raw": "a"
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 12,
                "end": 18
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 24,
            "end": 45,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 30,
                "end": 43,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "name": "_thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 38,
                    "end": 42,
                    "literal": {
                      "type": "Literal",
                      "start": 38,
                      "end": 42,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 48,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "name": "_S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 58,
        "end": 103,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 58,
            "end": 61,
            "literal": {
              "type": "Literal",
              "start": 58,
              "end": 61,
              "value": "1",
              "raw": "\"1\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 64,
            "end": 67,
            "literal": {
              "type": "Literal",
              "start": 64,
              "end": 67,
              "value": "2",
              "raw": "\"2\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 70,
            "end": 73,
            "literal": {
              "type": "Literal",
              "start": 70,
              "end": 73,
              "value": "3",
              "raw": "\"3\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 76,
            "end": 79,
            "literal": {
              "type": "Literal",
              "start": 76,
              "end": 79,
              "value": "4",
              "raw": "\"4\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 82,
            "end": 85,
            "literal": {
              "type": "Literal",
              "start": 82,
              "end": 85,
              "value": "5",
              "raw": "\"5\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 88,
            "end": 91,
            "literal": {
              "type": "Literal",
              "start": 88,
              "end": 91,
              "value": "6",
              "raw": "\"6\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 94,
            "end": 97,
            "literal": {
              "type": "Literal",
              "start": 94,
              "end": 97,
              "value": "7",
              "raw": "\"7\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 100,
            "end": 103,
            "literal": {
              "type": "Literal",
              "start": 100,
              "end": 103,
              "value": "8",
              "raw": "\"8\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 106,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 115,
        "end": 127,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 115,
            "end": 118,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 120,
            "end": 123,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 125,
            "end": 127,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 118,
            "end": 120,
            "typeName": {
              "type": "Identifier",
              "start": 118,
              "end": 120,
              "name": "_S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 123,
            "end": 125,
            "typeName": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "name": "_S",
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 131,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 140,
        "end": 145,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 140,
            "end": 141,
            "typeName": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 144,
            "end": 145,
            "typeName": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "name": "S",
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 147,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 153,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 156,
        "end": 167,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 156,
            "end": 159,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 160,
            "end": 164,
            "value": {
              "cooked": " ",
              "raw": " "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 165,
            "end": 167,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 159,
            "end": 160,
            "typeName": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 164,
            "end": 165,
            "typeName": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "name": "T",
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
    {
      "type": "ExportNamedDeclaration",
      "start": 170,
      "end": 213,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 177,
        "end": 213,
        "id": {
          "type": "Identifier",
          "start": 182,
          "end": 187,
          "name": "Props",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 190,
          "end": 212,
          "typeName": {
            "type": "Identifier",
            "start": 190,
            "end": 197,
            "name": "Partial",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 197,
            "end": 212,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 198,
                "end": 211,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 204,
                    "end": 209,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 205,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 205,
                      "end": 208,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 207,
                        "end": 208,
                        "typeName": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 208,
                          "name": "X",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            ]
          }
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
      "start": 215,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 230,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 225,
                "end": 230,
                "typeName": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 230,
                  "name": "Props",
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
            "start": 233,
            "end": 235,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 252,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 247,
                "end": 252,
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 252,
                  "name": "Props",
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
            "start": 255,
            "end": 257,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 270,
            "end": 286,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 272,
                "end": 277,
                "argument": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 277,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 279,
                "end": 284,
                "argument": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 284,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 289,
      "end": 302,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 298,
          "end": 299,
          "local": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
