__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 381,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 70,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 101,
        "decorators": [],
        "name": "ResizablePanelProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 102,
        "end": 152,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 106,
            "end": 150,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 114,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 116,
                "end": 150,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 117,
                    "end": 132,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 117,
                      "end": 132,
                      "left": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 122,
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 132,
                        "decorators": [],
                        "name": "ReactNode",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 134,
                    "end": 149,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 134,
                      "end": 149,
                      "left": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 139,
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 149,
                        "decorators": [],
                        "name": "ReactNode",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                ]
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
      "type": "ClassDeclaration",
      "start": 154,
      "end": 230,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 174,
        "decorators": [],
        "name": "ResizablePanel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 183,
        "end": 198,
        "object": {
          "type": "Identifier",
          "start": 183,
          "end": 188,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 189,
          "end": 198,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 198,
        "end": 227,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 202,
            "end": 221,
            "typeName": {
              "type": "Identifier",
              "start": 202,
              "end": 221,
              "decorators": [],
              "name": "ResizablePanelProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSAnyKeyword",
            "start": 223,
            "end": 226
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 228,
        "end": 230,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 299,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 242,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 245,
            "end": 299,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 245,
              "end": 261,
              "name": {
                "type": "JSXIdentifier",
                "start": 246,
                "end": 260,
                "name": "ResizablePanel"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 261,
                "end": 264,
                "value": "\n  ",
                "raw": "\n  "
              },
              {
                "type": "JSXElement",
                "start": 264,
                "end": 271,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 264,
                  "end": 271,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 265,
                    "end": 268,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              {
                "type": "JSXText",
                "start": 271,
                "end": 274,
                "value": "\n  ",
                "raw": "\n  "
              },
              {
                "type": "JSXElement",
                "start": 274,
                "end": 281,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 274,
                  "end": 281,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 275,
                    "end": 278,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              {
                "type": "JSXText",
                "start": 281,
                "end": 282,
                "value": "\n",
                "raw": "\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 282,
              "end": 299,
              "name": {
                "type": "JSXIdentifier",
                "start": 284,
                "end": 298,
                "name": "ResizablePanel"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 381,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 314,
            "decorators": [],
            "name": "testErr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 317,
            "end": 381,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 317,
              "end": 333,
              "name": {
                "type": "JSXIdentifier",
                "start": 318,
                "end": 332,
                "name": "ResizablePanel"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 333,
                "end": 336,
                "value": "\n  ",
                "raw": "\n  "
              },
              {
                "type": "JSXElement",
                "start": 336,
                "end": 343,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 336,
                  "end": 343,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 337,
                    "end": 340,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              {
                "type": "JSXText",
                "start": 343,
                "end": 346,
                "value": "\n  ",
                "raw": "\n  "
              },
              {
                "type": "JSXElement",
                "start": 346,
                "end": 353,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 346,
                  "end": 353,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 347,
                    "end": 350,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              {
                "type": "JSXText",
                "start": 353,
                "end": 356,
                "value": "\n  ",
                "raw": "\n  "
              },
              {
                "type": "JSXElement",
                "start": 356,
                "end": 363,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 356,
                  "end": 363,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 357,
                    "end": 360,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              {
                "type": "JSXText",
                "start": 363,
                "end": 364,
                "value": "\n",
                "raw": "\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 364,
              "end": 381,
              "name": {
                "type": "JSXIdentifier",
                "start": 366,
                "end": 380,
                "name": "ResizablePanel"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
