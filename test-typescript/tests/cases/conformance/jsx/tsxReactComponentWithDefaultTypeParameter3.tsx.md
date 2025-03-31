__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 281,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "name": "Prop",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 79,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
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
      "type": "ClassDeclaration",
      "start": 83,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 103,
        "name": "MyComp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 128,
        "end": 143,
        "object": {
          "type": "Identifier",
          "start": 128,
          "end": 133,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 134,
          "end": 143,
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
        "start": 151,
        "end": 175,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 157,
            "end": 173,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 169,
              "name": "internalProp",
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
              "start": 169,
              "end": 172,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 171,
                "end": 172,
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 103,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 118,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 114,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 114,
                "end": 118,
                "name": "Prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 143,
        "end": 150,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 144,
            "end": 145,
            "typeName": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 147,
            "end": 149,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 195,
            "end": 205,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 195,
              "end": 205,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 196,
                "end": 202,
                "name": "MyComp"
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 221,
            "end": 245,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 221,
              "end": 245,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 229,
                  "end": 235,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 229,
                    "end": 230,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 231,
                    "end": 235,
                    "expression": {
                      "type": "Literal",
                      "start": 232,
                      "end": 234,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 236,
                  "end": 242,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 236,
                    "end": 237,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 238,
                    "end": 242,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 222,
                "end": 228,
                "name": "MyComp"
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 281,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 262,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 265,
            "end": 281,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 265,
              "end": 281,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 273,
                  "end": 279,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 273,
                    "end": 274,
                    "name": "a"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 275,
                    "end": 279,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 266,
                "end": 272,
                "name": "MyComp"
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
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
