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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 132,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 147,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 148,
        "end": 168,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 154,
            "end": 166,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
  "end": 158,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 74,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 74,
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
          "end": 74,
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
              "end": 72,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 61,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 61,
                        "end": 69,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 63,
                          "end": 69
                        }
                      },
                      "accessibility": null,
                      "static": false
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
      "start": 76,
      "end": 102,
      "expression": {
        "type": "JSXElement",
        "start": 76,
        "end": 101,
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
                "value": "bar",
                "raw": "\"bar\""
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
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 135,
      "expression": {
        "type": "JSXElement",
        "start": 111,
        "end": 134,
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
                  "value": 0,
                  "raw": "0"
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
