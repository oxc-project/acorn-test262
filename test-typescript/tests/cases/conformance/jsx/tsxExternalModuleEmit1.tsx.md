__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 53,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 53,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 26,
            "end": 51,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 48,
              "end": 51,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 41,
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 41,
              "end": 47,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 42,
                  "end": 43,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 45,
                  "end": 46,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "raw": "'react'",
        "value": "react",
        "regex": null,
        "bigint": null
      }
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
  "end": 228,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
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
      "start": 87,
      "end": 121,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 110,
        "end": 120,
        "raw": "'./button'",
        "value": "./button",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 96,
          "end": 102,
          "imported": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "Button",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "Button",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 227,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 130,
        "end": 227,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 174,
          "end": 227,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 181,
              "end": 224,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 181,
                "end": 187,
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
                "start": 187,
                "end": 224,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 190,
                  "end": 224,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 200,
                      "end": 218,
                      "argument": {
                        "type": "JSXElement",
                        "start": 207,
                        "end": 217,
                        "children": [],
                        "closingElement": null,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 207,
                          "end": 217,
                          "attributes": [],
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 208,
                            "end": 214,
                            "name": "Button"
                          },
                          "selfClosing": true,
                          "typeArguments": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 136,
          "end": 139,
          "decorators": [],
          "name": "App",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 148,
          "end": 163,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 163,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 163,
          "end": 173,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 164,
              "end": 167
            },
            {
              "type": "TSAnyKeyword",
              "start": 169,
              "end": 172
            }
          ]
        },
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
  "end": 158,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
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
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 158,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 158,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 87,
          "end": 158,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 94,
              "end": 155,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 100,
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
                "start": 100,
                "end": 155,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 103,
                  "end": 155,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 113,
                      "end": 149,
                      "argument": {
                        "type": "JSXElement",
                        "start": 120,
                        "end": 148,
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 128,
                            "end": 139,
                            "raw": "Some button",
                            "value": "Some button"
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "start": 139,
                          "end": 148,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 141,
                            "end": 147,
                            "name": "button"
                          }
                        },
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 120,
                          "end": 128,
                          "attributes": [],
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 121,
                            "end": 127,
                            "name": "button"
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
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 52,
          "decorators": [],
          "name": "Button",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 61,
          "end": 76,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 66,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 76,
          "end": 86,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 77,
              "end": 80
            },
            {
              "type": "TSAnyKeyword",
              "start": 82,
              "end": 85
            }
          ]
        },
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
