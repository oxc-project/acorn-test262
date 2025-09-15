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
        "start": 164,
        "end": 170
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
                "start": 187,
                "end": 191
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 192,
                "end": 195
              },
              "abstract": false,
              "declare": false,
              "start": 181,
              "end": 195
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 174,
            "end": 195
          }
        ],
        "start": 171,
        "end": 197
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 154,
      "end": 197
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
            "start": 263,
            "end": 264
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "foundFirst",
                "start": 268,
                "end": 278
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 280,
                    "end": 281
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 282,
                    "end": 289
                  },
                  "start": 280,
                  "end": 289
                }
              ],
              "selfClosing": true,
              "start": 267,
              "end": 292
            },
            "children": [],
            "closingElement": null,
            "start": 267,
            "end": 292
          },
          "definite": false,
          "start": 263,
          "end": 292
        }
      ],
      "declare": false,
      "start": 259,
      "end": 293
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
            "start": 298,
            "end": 299
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "string_named",
                "start": 303,
                "end": 315
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 302,
              "end": 318
            },
            "children": [],
            "closingElement": null,
            "start": 302,
            "end": 318
          },
          "definite": false,
          "start": 298,
          "end": 318
        }
      ],
      "declare": false,
      "start": 294,
      "end": 319
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
            "start": 448,
            "end": 449
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Other",
                "start": 453,
                "end": 458
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 452,
              "end": 461
            },
            "children": [],
            "closingElement": null,
            "start": 452,
            "end": 461
          },
          "definite": false,
          "start": 448,
          "end": 461
        }
      ],
      "declare": false,
      "start": 444,
      "end": 462
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
            "start": 467,
            "end": 468
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
                  "start": 472,
                  "end": 478
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "Name",
                  "start": 479,
                  "end": 483
                },
                "start": 472,
                "end": 483
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 471,
              "end": 486
            },
            "children": [],
            "closingElement": null,
            "start": 471,
            "end": 486
          },
          "definite": false,
          "start": 467,
          "end": 486
        }
      ],
      "declare": false,
      "start": 463,
      "end": 487
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 487
}
```
