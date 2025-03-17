__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 130,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 77,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 79,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 114,
              "name": "ElementAttributesProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 115,
              "end": 128,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 119,
                  "end": 125,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 124,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 88,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 88,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 24,
          "name": "MyComponent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 88,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 31,
              "end": 45,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 37,
                "name": "render",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 37,
                "end": 45,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 40,
                  "end": 45,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 49,
              "end": 86,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 49,
                "end": 54,
                "name": "props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 54,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 56,
                  "end": 86,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 61,
                      "end": 82,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 62,
                          "end": 71,
                          "name": "s",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 63,
                            "end": 71,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 65,
                              "end": 71
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 72,
                        "end": 81,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 74,
                          "end": 81
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 140,
      "expression": {
        "type": "JSXElement",
        "start": 112,
        "end": 139,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 112,
          "end": 139,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 125,
              "end": 136,
              "name": {
                "type": "JSXIdentifier",
                "start": 125,
                "end": 128,
                "name": "bar"
              },
              "value": {
                "type": "Literal",
                "start": 129,
                "end": 136,
                "value": "world",
                "raw": "'world'"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 113,
            "end": 124,
            "name": "MyComponent"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 185,
      "expression": {
        "type": "JSXElement",
        "start": 158,
        "end": 184,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 158,
          "end": 184,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 171,
              "end": 181,
              "name": {
                "type": "JSXIdentifier",
                "start": 171,
                "end": 174,
                "name": "bar"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 175,
                "end": 181,
                "expression": {
                  "type": "Literal",
                  "start": 176,
                  "end": 180,
                  "value": true,
                  "raw": "true"
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 159,
            "end": 170,
            "name": "MyComponent"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 236,
      "expression": {
        "type": "JSXElement",
        "start": 203,
        "end": 235,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 203,
          "end": 235,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 216,
              "end": 232,
              "name": {
                "type": "JSXIdentifier",
                "start": 216,
                "end": 224,
                "name": "data-bar"
              },
              "value": {
                "type": "Literal",
                "start": 225,
                "end": 232,
                "value": "hello",
                "raw": "'hello'"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 204,
            "end": 215,
            "name": "MyComponent"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
