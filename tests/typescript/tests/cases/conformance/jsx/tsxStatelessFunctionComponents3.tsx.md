__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 43
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 54,
                    "end": 57
                  },
                  "start": 52,
                  "end": 57
                },
                "start": 47,
                "end": 57
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 63,
                  "end": 66
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 62,
                "end": 68
              },
              "children": [],
              "closingElement": null,
              "start": 62,
              "end": 68
            },
            "id": null,
            "generator": false,
            "start": 46,
            "end": 68
          },
          "definite": false,
          "start": 40,
          "end": 68
        }
      ],
      "declare": false,
      "start": 34,
      "end": 69
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 95
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 99,
                "end": 102
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 98,
              "end": 105
            },
            "children": [],
            "closingElement": null,
            "start": 98,
            "end": 105
          },
          "definite": false,
          "start": 92,
          "end": 105
        }
      ],
      "declare": false,
      "start": 86,
      "end": 106
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
            "name": "MainMenu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 144
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 163
                  },
                  "start": 139,
                  "end": 163
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 164,
                      "end": 166
                    }
                  ],
                  "start": 163,
                  "end": 167
                },
                "start": 139,
                "end": 167
              },
              "start": 137,
              "end": 167
            },
            "start": 129,
            "end": 167
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 176
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 183,
                  "end": 186
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 182,
                "end": 187
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 187,
                  "end": 192
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "h3",
                      "start": 193,
                      "end": 195
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": false,
                    "start": 192,
                    "end": 196
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "value": "Main Menu",
                      "raw": "Main Menu",
                      "start": 196,
                      "end": 205
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "h3",
                      "start": 207,
                      "end": 209
                    },
                    "start": 205,
                    "end": 210
                  },
                  "start": 192,
                  "end": 210
                },
                {
                  "type": "JSXText",
                  "value": "\n",
                  "raw": "\n",
                  "start": 210,
                  "end": 211
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 213,
                  "end": 216
                },
                "start": 211,
                "end": 217
              },
              "start": 182,
              "end": 217
            },
            "id": null,
            "generator": false,
            "start": 170,
            "end": 218
          },
          "definite": false,
          "start": 129,
          "end": 218
        }
      ],
      "declare": false,
      "start": 125,
      "end": 219
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
            "name": "App",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 235
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 254
                  },
                  "start": 230,
                  "end": 254
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
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 257,
                            "end": 265
                          },
                          "typeAnnotation": null,
                          "accessibility": null,
                          "static": false,
                          "start": 257,
                          "end": 265
                        }
                      ],
                      "start": 255,
                      "end": 267
                    }
                  ],
                  "start": 254,
                  "end": 268
                },
                "start": 230,
                "end": 268
              },
              "start": 228,
              "end": 268
            },
            "start": 225,
            "end": 268
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 281
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 281
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 273,
                    "end": 281
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 282
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 294,
                  "end": 297
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 293,
                "end": 299
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n        ",
                  "raw": "\n        ",
                  "start": 299,
                  "end": 308
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MainMenu",
                      "start": 309,
                      "end": 317
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 308,
                    "end": 319
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 308,
                  "end": 319
                },
                {
                  "type": "JSXText",
                  "value": "\n\t",
                  "raw": "\n\t",
                  "start": 319,
                  "end": 321
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 323,
                  "end": 326
                },
                "start": 321,
                "end": 327
              },
              "start": 293,
              "end": 327
            },
            "id": null,
            "generator": false,
            "start": 271,
            "end": 329
          },
          "definite": false,
          "start": 225,
          "end": 329
        }
      ],
      "declare": false,
      "start": 221,
      "end": 330
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 330
}
```
