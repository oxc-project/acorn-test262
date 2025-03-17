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
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 130,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 77,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 77,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 79,
            "end": 128,
            "body": {
              "type": "TSInterfaceBody",
              "start": 115,
              "end": 128,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 119,
                  "end": 125,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 124,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 114,
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 88,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 88,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 31,
              "end": 45,
              "accessibility": null,
              "computed": false,
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
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 37,
                "end": 45,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 40,
                  "end": 45,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 49,
              "end": 86,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 49,
                "end": 54,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
                      "accessibility": null,
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
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 72,
                        "end": 81,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 74,
                          "end": 81
                        }
                      }
                    }
                  ]
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 140,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 112,
        "end": 139,
        "children": [],
        "closingElement": null,
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
                "raw": "'world'",
                "value": "world"
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
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 185,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 158,
        "end": 184,
        "children": [],
        "closingElement": null,
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
                  "raw": "true",
                  "value": true
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
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 236,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 203,
        "end": 235,
        "children": [],
        "closingElement": null,
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
                "raw": "'hello'",
                "value": "hello"
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
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
