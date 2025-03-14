file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 81,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 81,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 65,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 79,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Prop",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 169,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 145,
        "end": 169,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 151,
            "end": 167,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 163,
              "decorators": [],
              "name": "internalProp",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "P",
                  "optional": false
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
        "start": 97,
        "end": 103,
        "decorators": [],
        "name": "MyComp",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 122,
        "end": 137,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 122,
          "end": 127,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 128,
          "end": 137,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 137,
        "end": 144,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 138,
            "end": 139,
            "typeName": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 141,
            "end": 143,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 103,
        "end": 113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 112,
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 112,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 112,
                "decorators": [],
                "name": "Prop",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 179,
            "end": 189,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 179,
              "end": 189,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 180,
                "end": 186,
                "name": "MyComp"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 190,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 196,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 199,
            "end": 215,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 199,
              "end": 215,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 207,
                  "end": 213,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 207,
                    "end": 208,
                    "name": "a"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 209,
                    "end": 213,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 200,
                "end": 206,
                "name": "MyComp"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
