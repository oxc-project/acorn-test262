__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 19,
            "end": 29
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              },
              "start": 31,
              "end": 39
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 30,
            "end": 40
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 44,
                "end": 50
              },
              "start": 42,
              "end": 50
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 41,
            "end": 51
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 52,
            "end": 62
          }
        ],
        "start": 13,
        "end": 64
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 64
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamedColors",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 87
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
              "name": "azure",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_Color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 107
                },
                "typeArguments": null,
                "start": 101,
                "end": 107
              },
              "start": 99,
              "end": 107
            },
            "accessibility": null,
            "static": false,
            "start": 94,
            "end": 108
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "blue",
              "raw": "\"blue\"",
              "start": 113,
              "end": 119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_Color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 127
                },
                "typeArguments": null,
                "start": 121,
                "end": 127
              },
              "start": 119,
              "end": 127
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 128
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "pale blue",
              "raw": "\"pale blue\"",
              "start": 133,
              "end": 144
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_Color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 152
                },
                "typeArguments": null,
                "start": 146,
                "end": 152
              },
              "start": 144,
              "end": 152
            },
            "accessibility": null,
            "static": false,
            "start": 133,
            "end": 153
          }
        ],
        "start": 88,
        "end": 155
      },
      "declare": false,
      "start": 66,
      "end": 155
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 168
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "namedColors",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NamedColors",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 199,
                          "end": 210
                        },
                        "typeArguments": null,
                        "start": 199,
                        "end": 210
                      },
                      "start": 197,
                      "end": 210
                    },
                    "start": 186,
                    "end": 210
                  },
                  "init": null,
                  "definite": false,
                  "start": 186,
                  "end": 210
                }
              ],
              "declare": false,
              "start": 182,
              "end": 211
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 175,
            "end": 211
          }
        ],
        "start": 169,
        "end": 213
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 156,
      "end": 213
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 219
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 227
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "namedColors",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 239
              },
              "optional": false,
              "computed": false,
              "start": 222,
              "end": 239
            },
            "property": {
              "type": "Literal",
              "value": "azure",
              "raw": "\"azure\"",
              "start": 240,
              "end": 247
            },
            "optional": false,
            "computed": true,
            "start": 222,
            "end": 248
          },
          "definite": false,
          "start": 218,
          "end": 248
        }
      ],
      "declare": false,
      "start": 214,
      "end": 249
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 255
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 263
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "namedColors",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 275
              },
              "optional": false,
              "computed": false,
              "start": 258,
              "end": 275
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 280
            },
            "optional": false,
            "computed": false,
            "start": 258,
            "end": 280
          },
          "definite": false,
          "start": 254,
          "end": 280
        }
      ],
      "declare": false,
      "start": 250,
      "end": 281
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 307
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 315
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "namedColors",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 327
              },
              "optional": false,
              "computed": false,
              "start": 310,
              "end": 327
            },
            "property": {
              "type": "Literal",
              "value": "pale blue",
              "raw": "\"pale blue\"",
              "start": 328,
              "end": 339
            },
            "optional": false,
            "computed": true,
            "start": 310,
            "end": 340
          },
          "definite": false,
          "start": 306,
          "end": 340
        }
      ],
      "declare": false,
      "start": 302,
      "end": 341
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 361
}
```
