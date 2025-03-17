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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "ResizablePanelProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                        "name": "React",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 132,
                        "name": "ReactNode",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "React",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 149,
                        "name": "ReactNode",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 174,
        "name": "ResizablePanel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 183,
        "end": 198,
        "object": {
          "type": "Identifier",
          "start": 183,
          "end": 188,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 189,
          "end": 198,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 228,
        "end": 230,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
              "name": "ResizablePanelProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSAnyKeyword",
            "start": 223,
            "end": 226
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 242,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 245,
            "end": 299,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 245,
              "end": 261,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 246,
                "end": 260,
                "name": "ResizablePanel"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 265,
                    "end": 268,
                    "name": "div"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
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
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 275,
                    "end": 278,
                    "name": "div"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 281,
                "end": 282,
                "value": "\n",
                "raw": "\n"
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
      "type": "VariableDeclaration",
      "start": 301,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 314,
            "name": "testErr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 317,
            "end": 381,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 317,
              "end": 333,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 318,
                "end": 332,
                "name": "ResizablePanel"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 337,
                    "end": 340,
                    "name": "div"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
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
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 347,
                    "end": 350,
                    "name": "div"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
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
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 357,
                    "end": 360,
                    "name": "div"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 363,
                "end": 364,
                "value": "\n",
                "raw": "\n"
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
