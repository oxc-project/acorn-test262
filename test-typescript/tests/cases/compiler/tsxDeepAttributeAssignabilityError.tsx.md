__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 49,
        "name": "MyProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 50,
        "end": 89,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 66,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 87,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 86,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 86,
                  "name": "MyInnerProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 91,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 113,
        "name": "MyInnerProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 114,
        "end": 136,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 134,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 125,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
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
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 224,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 145,
        "end": 224,
        "id": {
          "type": "Identifier",
          "start": 154,
          "end": 165,
          "name": "MyComponent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 166,
            "end": 181,
            "name": "_props",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 181,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 181,
                  "name": "MyProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 183,
          "end": 224,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 189,
              "end": 222,
              "argument": {
                "type": "JSXElement",
                "start": 196,
                "end": 221,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 196,
                  "end": 202,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 197,
                    "end": 201,
                    "name": "span"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                },
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 214,
                  "end": 221,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 216,
                    "end": 220,
                    "name": "span"
                  }
                },
                "children": [
                  {
                    "type": "JSXText",
                    "start": 202,
                    "end": 214,
                    "value": "my component",
                    "raw": "my component"
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 146,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 75,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 51,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 51,
            "name": "MyComponent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 51,
            "name": "MyComponent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 59,
        "end": 75,
        "value": "./my-component",
        "raw": "'./my-component'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 145,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 84,
        "end": 145,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 90,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 96,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "JSXElement",
              "start": 99,
              "end": 144,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 99,
                "end": 144,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 112,
                    "end": 119,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 112,
                      "end": 113,
                      "name": "x"
                    },
                    "value": {
                      "type": "Literal",
                      "start": 114,
                      "end": 119,
                      "value": "yes",
                      "raw": "\"yes\""
                    }
                  },
                  {
                    "type": "JSXAttribute",
                    "start": 120,
                    "end": 141,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 120,
                      "end": 121,
                      "name": "y"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 122,
                      "end": 141,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 123,
                        "end": 140,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 129,
                            "end": 138,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 129,
                              "end": 134,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 136,
                              "end": 138,
                              "value": 42,
                              "raw": "42"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 100,
                  "end": 111,
                  "name": "MyComponent"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
