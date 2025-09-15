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
        "start": 166,
        "end": 171
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
                          "start": 202,
                          "end": 213
                        },
                        "typeArguments": null,
                        "start": 202,
                        "end": 213
                      },
                      "start": 200,
                      "end": 213
                    },
                    "start": 189,
                    "end": 213
                  },
                  "init": null,
                  "definite": false,
                  "start": 189,
                  "end": 213
                }
              ],
              "declare": false,
              "start": 185,
              "end": 214
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 178,
            "end": 214
          }
        ],
        "start": 172,
        "end": 216
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 156,
      "end": 216
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
            "start": 221,
            "end": 222
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
                "start": 225,
                "end": 230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "namedColors",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 242
              },
              "optional": false,
              "computed": false,
              "start": 225,
              "end": 242
            },
            "property": {
              "type": "Literal",
              "value": "azure",
              "raw": "\"azure\"",
              "start": 243,
              "end": 250
            },
            "optional": false,
            "computed": true,
            "start": 225,
            "end": 251
          },
          "definite": false,
          "start": 221,
          "end": 251
        }
      ],
      "declare": false,
      "start": 217,
      "end": 252
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
            "start": 257,
            "end": 258
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
                "start": 261,
                "end": 266
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "namedColors",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 278
              },
              "optional": false,
              "computed": false,
              "start": 261,
              "end": 278
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 283
            },
            "optional": false,
            "computed": false,
            "start": 261,
            "end": 283
          },
          "definite": false,
          "start": 257,
          "end": 283
        }
      ],
      "declare": false,
      "start": 253,
      "end": 284
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
            "start": 309,
            "end": 310
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
                "start": 313,
                "end": 318
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "namedColors",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 330
              },
              "optional": false,
              "computed": false,
              "start": 313,
              "end": 330
            },
            "property": {
              "type": "Literal",
              "value": "pale blue",
              "raw": "\"pale blue\"",
              "start": 331,
              "end": 342
            },
            "optional": false,
            "computed": true,
            "start": 313,
            "end": 343
          },
          "definite": false,
          "start": 309,
          "end": 343
        }
      ],
      "declare": false,
      "start": 305,
      "end": 344
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 364
}
```
