__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 132,
      "end": 168,
      "body": {
        "type": "TSInterfaceBody",
        "start": 148,
        "end": 168,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 154,
            "end": 166,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 147,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
  "end": 157,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 74,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 74,
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
              "end": 72,
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
                "end": 72,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 56,
                  "end": 72,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 58,
                      "end": 70,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 61,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 61,
                        "end": 69,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 63,
                          "end": 69
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
      "start": 76,
      "end": 102,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 76,
        "end": 101,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 76,
          "end": 101,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 89,
              "end": 98,
              "name": {
                "type": "JSXIdentifier",
                "start": 89,
                "end": 92,
                "name": "foo"
              },
              "value": {
                "type": "Literal",
                "start": 93,
                "end": 98,
                "raw": "\"bar\"",
                "value": "bar",
                "regex": null,
                "bigint": null
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 77,
            "end": 88,
            "name": "MyComponent"
          },
          "selfClosing": true,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 135,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 111,
        "end": 134,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 111,
          "end": 134,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 124,
              "end": 131,
              "name": {
                "type": "JSXIdentifier",
                "start": 124,
                "end": 127,
                "name": "foo"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 128,
                "end": 131,
                "expression": {
                  "type": "Literal",
                  "start": 129,
                  "end": 130,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 112,
            "end": 123,
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
