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
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
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
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attribs1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 95
                      },
                      "typeArguments": null,
                      "start": 87,
                      "end": 95
                    },
                    "start": 85,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 96
                }
              ],
              "start": 76,
              "end": 99
            },
            "declare": false,
            "start": 48,
            "end": 99
          }
        ],
        "start": 22,
        "end": 101
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 120
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 133,
                        "end": 139
                      },
                      "start": 131,
                      "end": 139
                    },
                    "start": 130,
                    "end": 139
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 144,
                    "end": 148
                  },
                  "start": 141,
                  "end": 148
                },
                "start": 129,
                "end": 148
              },
              "start": 127,
              "end": 148
            },
            "accessibility": null,
            "static": false,
            "start": 124,
            "end": 149
          }
        ],
        "start": 121,
        "end": 151
      },
      "declare": false,
      "start": 102,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 160,
            "end": 165
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "c1",
                "start": 166,
                "end": 168
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 172
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 178
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 185
                    },
                    "optional": false,
                    "computed": false,
                    "start": 177,
                    "end": 185
                  },
                  "id": null,
                  "generator": false,
                  "start": 170,
                  "end": 185
                },
                "start": 169,
                "end": 186
              },
              "start": 166,
              "end": 186
            }
          ],
          "selfClosing": true,
          "start": 159,
          "end": 189
        },
        "children": [],
        "closingElement": null,
        "start": 159,
        "end": 189
      },
      "directive": null,
      "start": 159,
      "end": 190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 198,
            "end": 203
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-c1",
                "start": 204,
                "end": 211
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 215
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 221
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "leng",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 226
                    },
                    "optional": false,
                    "computed": false,
                    "start": 220,
                    "end": 226
                  },
                  "id": null,
                  "generator": false,
                  "start": 213,
                  "end": 226
                },
                "start": 212,
                "end": 227
              },
              "start": 204,
              "end": 227
            }
          ],
          "selfClosing": true,
          "start": 197,
          "end": 230
        },
        "children": [],
        "closingElement": null,
        "start": 197,
        "end": 230
      },
      "directive": null,
      "start": 197,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 251,
            "end": 256
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "c1",
                "start": 257,
                "end": 259
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 263
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 269
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "leng",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 274
                    },
                    "optional": false,
                    "computed": false,
                    "start": 268,
                    "end": 274
                  },
                  "id": null,
                  "generator": false,
                  "start": 261,
                  "end": 274
                },
                "start": 260,
                "end": 275
              },
              "start": 257,
              "end": 275
            }
          ],
          "selfClosing": true,
          "start": 250,
          "end": 278
        },
        "children": [],
        "closingElement": null,
        "start": 250,
        "end": 278
      },
      "directive": null,
      "start": 250,
      "end": 279
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 309
}
```
