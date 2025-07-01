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
        "start": 15,
        "end": 18
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
              "start": 32,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 22,
            "end": 43
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 72
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
                    "start": 77,
                    "end": 82
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
                        "start": 84,
                        "end": 92
                      },
                      "typeArguments": null,
                      "start": 84,
                      "end": 92
                    },
                    "start": 82,
                    "end": 92
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 93
                }
              ],
              "start": 73,
              "end": 96
            },
            "declare": false,
            "start": 45,
            "end": 96
          }
        ],
        "start": 19,
        "end": 98
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 117
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
              "start": 121,
              "end": 123
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
                        "start": 130,
                        "end": 136
                      },
                      "start": 128,
                      "end": 136
                    },
                    "start": 127,
                    "end": 136
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 141,
                    "end": 145
                  },
                  "start": 138,
                  "end": 145
                },
                "start": 126,
                "end": 145
              },
              "start": 124,
              "end": 145
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 146
          }
        ],
        "start": 118,
        "end": 148
      },
      "declare": false,
      "start": 99,
      "end": 148
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
            "start": 157,
            "end": 162
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "c1",
                "start": 163,
                "end": 165
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
                      "start": 168,
                      "end": 169
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
                      "start": 174,
                      "end": 175
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 182
                    },
                    "optional": false,
                    "computed": false,
                    "start": 174,
                    "end": 182
                  },
                  "id": null,
                  "generator": false,
                  "start": 167,
                  "end": 182
                },
                "start": 166,
                "end": 183
              },
              "start": 163,
              "end": 183
            }
          ],
          "selfClosing": true,
          "start": 156,
          "end": 186
        },
        "children": [],
        "closingElement": null,
        "start": 156,
        "end": 186
      },
      "directive": null,
      "start": 156,
      "end": 187
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
            "start": 195,
            "end": 200
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-c1",
                "start": 201,
                "end": 208
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
                      "start": 211,
                      "end": 212
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
                      "start": 217,
                      "end": 218
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "leng",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 223
                    },
                    "optional": false,
                    "computed": false,
                    "start": 217,
                    "end": 223
                  },
                  "id": null,
                  "generator": false,
                  "start": 210,
                  "end": 223
                },
                "start": 209,
                "end": 224
              },
              "start": 201,
              "end": 224
            }
          ],
          "selfClosing": true,
          "start": 194,
          "end": 227
        },
        "children": [],
        "closingElement": null,
        "start": 194,
        "end": 227
      },
      "directive": null,
      "start": 194,
      "end": 228
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
            "start": 248,
            "end": 253
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "c1",
                "start": 254,
                "end": 256
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
                      "start": 259,
                      "end": 260
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
                      "start": 265,
                      "end": 266
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "leng",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 271
                    },
                    "optional": false,
                    "computed": false,
                    "start": 265,
                    "end": 271
                  },
                  "id": null,
                  "generator": false,
                  "start": 258,
                  "end": 271
                },
                "start": 257,
                "end": 272
              },
              "start": 254,
              "end": 272
            }
          ],
          "selfClosing": true,
          "start": 247,
          "end": 275
        },
        "children": [],
        "closingElement": null,
        "start": 247,
        "end": 275
      },
      "directive": null,
      "start": 247,
      "end": 276
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 306
}
```
