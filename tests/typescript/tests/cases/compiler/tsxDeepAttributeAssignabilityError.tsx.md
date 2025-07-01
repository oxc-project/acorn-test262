__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 23,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 30
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 49
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 66
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyInnerProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 86
                },
                "typeArguments": null,
                "start": 74,
                "end": 86
              },
              "start": 72,
              "end": 86
            },
            "accessibility": null,
            "static": false,
            "start": 71,
            "end": 87
          }
        ],
        "start": 50,
        "end": 89
      },
      "declare": false,
      "start": 32,
      "end": 89
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyInnerProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 113
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "accessibility": null,
            "static": false,
            "start": 120,
            "end": 134
          }
        ],
        "start": 114,
        "end": 136
      },
      "declare": false,
      "start": 91,
      "end": 136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 165
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 181
                },
                "typeArguments": null,
                "start": 174,
                "end": 181
              },
              "start": 172,
              "end": 181
            },
            "start": 166,
            "end": 181
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 197,
                    "end": 201
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 196,
                  "end": 202
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "my component",
                    "raw": "my component",
                    "start": 202,
                    "end": 214
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 216,
                    "end": 220
                  },
                  "start": 214,
                  "end": 221
                },
                "start": 196,
                "end": 221
              },
              "start": 189,
              "end": 222
            }
          ],
          "start": 183,
          "end": 224
        },
        "expression": false,
        "start": 145,
        "end": 224
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 138,
      "end": 224
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 225
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 23,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 30
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 51
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 51
          },
          "importKind": "value",
          "start": 40,
          "end": 51
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./my-component",
        "raw": "'./my-component'",
        "start": 59,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 31,
      "end": 75
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 96
            },
            "init": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "MyComponent",
                  "start": 100,
                  "end": 111
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "x",
                      "start": 112,
                      "end": 113
                    },
                    "value": {
                      "type": "Literal",
                      "value": "yes",
                      "raw": "\"yes\"",
                      "start": 114,
                      "end": 119
                    },
                    "start": 112,
                    "end": 119
                  },
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "y",
                      "start": 120,
                      "end": 121
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 129,
                              "end": 134
                            },
                            "value": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 136,
                              "end": 138
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 129,
                            "end": 138
                          }
                        ],
                        "start": 123,
                        "end": 140
                      },
                      "start": 122,
                      "end": 141
                    },
                    "start": 120,
                    "end": 141
                  }
                ],
                "selfClosing": true,
                "start": 99,
                "end": 144
              },
              "children": [],
              "closingElement": null,
              "start": 99,
              "end": 144
            },
            "definite": false,
            "start": 90,
            "end": 144
          }
        ],
        "declare": false,
        "start": 84,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 77,
      "end": 145
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 145
}
```
