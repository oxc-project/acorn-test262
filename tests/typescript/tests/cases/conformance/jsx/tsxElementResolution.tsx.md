__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 52
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
                    "name": "foundFirst",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 67
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 71,
                            "end": 72
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 74,
                              "end": 80
                            },
                            "start": 72,
                            "end": 80
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 71,
                          "end": 80
                        }
                      ],
                      "start": 69,
                      "end": 82
                    },
                    "start": 67,
                    "end": 82
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 57,
                  "end": 83
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "string_named",
                    "raw": "'string_named'",
                    "start": 86,
                    "end": 100
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 86,
                  "end": 101
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "var",
                    "raw": "'var'",
                    "start": 104,
                    "end": 109
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 104,
                  "end": 110
                }
              ],
              "start": 53,
              "end": 113
            },
            "declare": false,
            "start": 25,
            "end": 113
          }
        ],
        "start": 22,
        "end": 115
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foundFirst",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 133
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 134,
        "end": 137
      },
      "abstract": false,
      "declare": false,
      "start": 117,
      "end": 137
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 149
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 150,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 138,
      "end": 152
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dotted",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 167
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Name",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 188
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 189,
                "end": 192
              },
              "abstract": false,
              "declare": false,
              "start": 178,
              "end": 192
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 171,
            "end": 192
          }
        ],
        "start": 168,
        "end": 194
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 154,
      "end": 194
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
            "start": 260,
            "end": 261
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "foundFirst",
                "start": 265,
                "end": 275
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 277,
                    "end": 278
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 279,
                    "end": 286
                  },
                  "start": 277,
                  "end": 286
                }
              ],
              "selfClosing": true,
              "start": 264,
              "end": 289
            },
            "children": [],
            "closingElement": null,
            "start": 264,
            "end": 289
          },
          "definite": false,
          "start": 260,
          "end": 289
        }
      ],
      "declare": false,
      "start": 256,
      "end": 290
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 296
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "string_named",
                "start": 300,
                "end": 312
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 299,
              "end": 315
            },
            "children": [],
            "closingElement": null,
            "start": 299,
            "end": 315
          },
          "definite": false,
          "start": 295,
          "end": 315
        }
      ],
      "declare": false,
      "start": 291,
      "end": 316
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 446
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Other",
                "start": 450,
                "end": 455
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 449,
              "end": 458
            },
            "children": [],
            "closingElement": null,
            "start": 449,
            "end": 458
          },
          "definite": false,
          "start": 445,
          "end": 458
        }
      ],
      "declare": false,
      "start": 441,
      "end": 459
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 465
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "Dotted",
                  "start": 469,
                  "end": 475
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "Name",
                  "start": 476,
                  "end": 480
                },
                "start": 469,
                "end": 480
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 468,
              "end": 483
            },
            "children": [],
            "closingElement": null,
            "start": 468,
            "end": 483
          },
          "definite": false,
          "start": 464,
          "end": 483
        }
      ],
      "declare": false,
      "start": 460,
      "end": 484
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 484
}
```
