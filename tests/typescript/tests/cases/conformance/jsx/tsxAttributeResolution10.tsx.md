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
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
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
  "end": 236,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 88,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 88,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 24,
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 88,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 31,
              "end": 45,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 37,
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 37,
                "end": 45,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 40,
                  "end": 45,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 49,
              "end": 86,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 49,
                "end": 54,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              },
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
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 63,
                            "end": 71,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 65,
                              "end": 71
                            }
                          }
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "name": {
            "type": "JSXIdentifier",
            "start": 113,
            "end": 124,
            "name": "MyComponent"
          },
          "typeArguments": null,
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
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
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
          "name": {
            "type": "JSXIdentifier",
            "start": 159,
            "end": 170,
            "name": "MyComponent"
          },
          "typeArguments": null,
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
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
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
          "name": {
            "type": "JSXIdentifier",
            "start": 204,
            "end": 215,
            "name": "MyComponent"
          },
          "typeArguments": null,
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
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
