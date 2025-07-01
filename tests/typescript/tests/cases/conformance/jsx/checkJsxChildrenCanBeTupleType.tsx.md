__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 70
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResizablePanelProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 101
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
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 117,
                        "end": 122
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactNode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 132
                      },
                      "start": 117,
                      "end": 132
                    },
                    "typeArguments": null,
                    "start": 117,
                    "end": 132
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 139
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactNode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 149
                      },
                      "start": 134,
                      "end": 149
                    },
                    "typeArguments": null,
                    "start": 134,
                    "end": 149
                  }
                ],
                "start": 116,
                "end": 150
              },
              "start": 114,
              "end": 150
            },
            "accessibility": null,
            "static": false,
            "start": 106,
            "end": 150
          }
        ],
        "start": 102,
        "end": 152
      },
      "declare": false,
      "start": 72,
      "end": 152
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResizablePanel",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 174
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 188
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 198
        },
        "optional": false,
        "computed": false,
        "start": 183,
        "end": 198
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ResizablePanelProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 221
            },
            "typeArguments": null,
            "start": 202,
            "end": 221
          },
          {
            "type": "TSAnyKeyword",
            "start": 223,
            "end": 226
          }
        ],
        "start": 198,
        "end": 227
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 228,
        "end": 230
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 230
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ResizablePanel",
                "start": 246,
                "end": 260
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 245,
              "end": 261
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 261,
                "end": 264
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 265,
                    "end": 268
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 264,
                  "end": 271
                },
                "children": [],
                "closingElement": null,
                "start": 264,
                "end": 271
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 271,
                "end": 274
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 275,
                    "end": 278
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 274,
                  "end": 281
                },
                "children": [],
                "closingElement": null,
                "start": 274,
                "end": 281
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 281,
                "end": 282
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ResizablePanel",
                "start": 284,
                "end": 298
              },
              "start": 282,
              "end": 299
            },
            "start": 245,
            "end": 299
          },
          "definite": false,
          "start": 238,
          "end": 299
        }
      ],
      "declare": false,
      "start": 232,
      "end": 299
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
            "name": "testErr",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 314
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ResizablePanel",
                "start": 318,
                "end": 332
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 317,
              "end": 333
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 333,
                "end": 336
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 337,
                    "end": 340
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 336,
                  "end": 343
                },
                "children": [],
                "closingElement": null,
                "start": 336,
                "end": 343
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 343,
                "end": 346
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 347,
                    "end": 350
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 346,
                  "end": 353
                },
                "children": [],
                "closingElement": null,
                "start": 346,
                "end": 353
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 353,
                "end": 356
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 357,
                    "end": 360
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 356,
                  "end": 363
                },
                "children": [],
                "closingElement": null,
                "start": 356,
                "end": 363
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 363,
                "end": 364
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ResizablePanel",
                "start": 366,
                "end": 380
              },
              "start": 364,
              "end": 381
            },
            "start": 317,
            "end": 381
          },
          "definite": false,
          "start": 307,
          "end": 381
        }
      ],
      "declare": false,
      "start": 301,
      "end": 381
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 381
}
```
