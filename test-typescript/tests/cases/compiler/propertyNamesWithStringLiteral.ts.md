__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "_Color",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 64,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 29,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 40,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 41,
            "end": 51,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 44,
                "end": 50
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 62,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 66,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 87,
        "name": "NamedColors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 155,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 108,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 99,
              "name": "azure",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 107,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 107,
                  "name": "_Color",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 128,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 113,
              "end": 119,
              "value": "blue",
              "raw": "\"blue\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 127,
                  "name": "_Color",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 133,
            "end": 153,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 133,
              "end": 144,
              "value": "pale blue",
              "raw": "\"pale blue\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 152,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 152,
                  "name": "_Color",
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
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 156,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 168,
        "name": "Color",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 169,
        "end": 213,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 175,
            "end": 211,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 182,
              "end": 211,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 186,
                  "end": 210,
                  "id": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 210,
                    "name": "namedColors",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 197,
                      "end": 210,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 199,
                        "end": 210,
                        "typeName": {
                          "type": "Identifier",
                          "start": 199,
                          "end": 210,
                          "name": "NamedColors",
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
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 219,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 222,
            "end": 248,
            "object": {
              "type": "MemberExpression",
              "start": 222,
              "end": 239,
              "object": {
                "type": "Identifier",
                "start": 222,
                "end": 227,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 228,
                "end": 239,
                "name": "namedColors",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 240,
              "end": 247,
              "value": "azure",
              "raw": "\"azure\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 280,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 255,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 258,
            "end": 280,
            "object": {
              "type": "MemberExpression",
              "start": 258,
              "end": 275,
              "object": {
                "type": "Identifier",
                "start": 258,
                "end": 263,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 264,
                "end": 275,
                "name": "namedColors",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 276,
              "end": 280,
              "name": "blue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 340,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 310,
            "end": 340,
            "object": {
              "type": "MemberExpression",
              "start": 310,
              "end": 327,
              "object": {
                "type": "Identifier",
                "start": 310,
                "end": 315,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 316,
                "end": 327,
                "name": "namedColors",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 328,
              "end": 339,
              "value": "pale blue",
              "raw": "\"pale blue\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
