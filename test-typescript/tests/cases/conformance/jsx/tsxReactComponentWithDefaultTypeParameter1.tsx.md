__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
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
        "optional": false,
        "typeAnnotation": null
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
          "value": "react",
          "regex": null,
          "bigint": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
            "accessibility": null,
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
              "optional": false,
              "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
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
        "start": 97,
        "end": 103,
        "decorators": [],
        "name": "MyComp",
        "optional": false,
        "typeAnnotation": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 128,
          "end": 137,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
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
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 112,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 112,
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
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
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 179,
            "end": 203,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 179,
              "end": 203,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 187,
                  "end": 193,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 187,
                    "end": 188,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 189,
                    "end": 193,
                    "expression": {
                      "type": "Literal",
                      "start": 190,
                      "end": 192,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 194,
                  "end": 200,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 194,
                    "end": 195,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 196,
                    "end": 200,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 180,
                "end": 186,
                "name": "MyComp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
