__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
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
        "raw": "\"react\"",
        "value": "react"
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
      "start": 32,
      "end": 118,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 39,
        "end": 118,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 94,
          "end": 118,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 100,
              "end": 116,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 112,
                "decorators": [],
                "name": "internalProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 112,
                "end": 115,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 115,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "value": null
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 59,
          "decorators": [],
          "name": "MyComp",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 71,
          "end": 86,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 71,
            "end": 76,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 77,
            "end": 86,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 86,
          "end": 93,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 87,
              "end": 88,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 90,
              "end": 92,
              "members": []
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 59,
          "end": 62,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 60,
              "end": 61,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 120,
      "end": 174,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 127,
        "end": 174,
        "body": {
          "type": "TSInterfaceBody",
          "start": 142,
          "end": 174,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 148,
              "end": 158,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 149,
                "end": 157,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 151,
                  "end": 157
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 163,
              "end": 172,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 164,
                "end": 172,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 166,
                  "end": 172
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 141,
          "decorators": [],
          "name": "Prop",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 150,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 42,
        "raw": "\"./component\"",
        "value": "./component"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "MyComp",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "MyComp",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 17,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 17,
            "end": 21,
            "decorators": [],
            "name": "Prop",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 21,
            "decorators": [],
            "name": "Prop",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 85,
            "end": 115,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 85,
              "end": 115,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 99,
                  "end": 105,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 99,
                    "end": 100,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 101,
                    "end": 105,
                    "expression": {
                      "type": "Literal",
                      "start": 102,
                      "end": 104,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 106,
                  "end": 112,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 106,
                    "end": 107,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 108,
                    "end": 112,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 86,
                "end": 92,
                "name": "MyComp"
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 92,
                "end": 98,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 93,
                    "end": 97,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 97,
                      "decorators": [],
                      "name": "Prop",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
