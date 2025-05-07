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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "raw": "'react'",
        "value": "react",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 89,
      "body": {
        "type": "TSInterfaceBody",
        "start": 50,
        "end": 89,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 87,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 86,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 86,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 86,
                  "decorators": [],
                  "name": "MyInnerProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 49,
        "decorators": [],
        "name": "MyProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 91,
      "end": 136,
      "body": {
        "type": "TSInterfaceBody",
        "start": 114,
        "end": 136,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 134,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 125,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 113,
        "decorators": [],
        "name": "MyInnerProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 224,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 145,
        "end": 224,
        "async": false,
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
                "children": [
                  {
                    "type": "JSXText",
                    "start": 202,
                    "end": 214,
                    "raw": "my component",
                    "value": "my component"
                  }
                ],
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
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 154,
          "end": 165,
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 166,
            "end": 181,
            "decorators": [],
            "name": "_props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 181,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 181,
                  "decorators": [],
                  "name": "MyProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 145,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "raw": "'react'",
        "value": "react",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 75,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 59,
        "end": 75,
        "raw": "'./my-component'",
        "value": "./my-component",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 51,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 51,
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 51,
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 145,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 84,
        "end": 145,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 90,
            "end": 144,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 96,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "JSXElement",
              "start": 99,
              "end": 144,
              "children": [],
              "closingElement": null,
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
                      "raw": "\"yes\"",
                      "value": "yes",
                      "regex": null,
                      "bigint": null
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 129,
                              "end": 134,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 136,
                              "end": 138,
                              "raw": "42",
                              "value": 42,
                              "regex": null,
                              "bigint": null
                            }
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
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
