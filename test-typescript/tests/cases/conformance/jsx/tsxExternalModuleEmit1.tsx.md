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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "react",
        "raw": "'react'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 53,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 26,
            "end": 51,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 41,
              "name": "Component",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 48,
              "end": 51,
              "body": []
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 41,
              "end": 47,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 42,
                  "end": 43,
                  "name": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 45,
                  "end": 46,
                  "name": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
  "end": 228,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
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
      "start": 87,
      "end": 121,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 96,
          "end": 102,
          "imported": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "name": "Button",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "name": "Button",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 110,
        "end": 120,
        "value": "./button",
        "raw": "'./button'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 227,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 130,
        "end": 227,
        "id": {
          "type": "Identifier",
          "start": 136,
          "end": 139,
          "name": "App",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 148,
          "end": 163,
          "object": {
            "type": "Identifier",
            "start": 148,
            "end": 153,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 163,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 174,
          "end": 227,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 181,
              "end": 224,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 181,
                "end": 187,
                "name": "render",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 187,
                "end": 224,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        },
                        "closingElement": null,
                        "children": []
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
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
        }
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
  "end": 158,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
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
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 158,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 158,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 52,
          "name": "Button",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 61,
          "end": 76,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 66,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 87,
          "end": 158,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 94,
              "end": 155,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 100,
                "name": "render",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 100,
                "end": 155,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        },
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
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 128,
                            "end": 139,
                            "value": "Some button",
                            "raw": "Some button"
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
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
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
        }
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
