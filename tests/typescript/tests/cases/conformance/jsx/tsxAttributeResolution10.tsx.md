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
              "body": [],
              "start": 76,
              "end": 80
            },
            "declare": false,
            "start": 48,
            "end": 80
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 122,
                    "end": 127
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 122,
                  "end": 128
                }
              ],
              "start": 118,
              "end": 131
            },
            "declare": false,
            "start": 82,
            "end": 131
          }
        ],
        "start": 22,
        "end": 133
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 134
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 24
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 37
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 40,
                  "end": 45
                },
                "expression": false,
                "start": 37,
                "end": 45
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 31,
              "end": 45
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 54
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 65,
                              "end": 71
                            },
                            "start": 63,
                            "end": 71
                          },
                          "start": 62,
                          "end": 71
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 74,
                          "end": 81
                        },
                        "start": 72,
                        "end": 81
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 61,
                      "end": 82
                    }
                  ],
                  "start": 56,
                  "end": 86
                },
                "start": 54,
                "end": 86
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
              "start": 49,
              "end": 86
            }
          ],
          "start": 25,
          "end": 88
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "start": 113,
            "end": 124
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "bar",
                "start": 125,
                "end": 128
              },
              "value": {
                "type": "Literal",
                "value": "world",
                "raw": "'world'",
                "start": 129,
                "end": 136
              },
              "start": 125,
              "end": 136
            }
          ],
          "selfClosing": true,
          "start": 112,
          "end": 139
        },
        "children": [],
        "closingElement": null,
        "start": 112,
        "end": 139
      },
      "directive": null,
      "start": 112,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "start": 159,
            "end": 170
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "bar",
                "start": 171,
                "end": 174
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 176,
                  "end": 180
                },
                "start": 175,
                "end": 181
              },
              "start": 171,
              "end": 181
            }
          ],
          "selfClosing": true,
          "start": 158,
          "end": 184
        },
        "children": [],
        "closingElement": null,
        "start": 158,
        "end": 184
      },
      "directive": null,
      "start": 158,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "start": 204,
            "end": 215
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-bar",
                "start": 216,
                "end": 224
              },
              "value": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 225,
                "end": 232
              },
              "start": 216,
              "end": 232
            }
          ],
          "selfClosing": true,
          "start": 203,
          "end": 235
        },
        "children": [],
        "closingElement": null,
        "start": 203,
        "end": 235
      },
      "directive": null,
      "start": 203,
      "end": 236
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 236
}
```
