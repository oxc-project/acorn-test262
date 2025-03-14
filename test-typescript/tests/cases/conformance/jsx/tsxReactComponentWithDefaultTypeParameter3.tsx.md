file.tsx
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
      "end": 175,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 175,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 157,
            "end": 173,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 169,
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
        "start": 128,
        "end": 143,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 128,
          "end": 133,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 134,
          "end": 143,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
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
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 147,
            "end": 149,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 103,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 118,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 114,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 114,
                "end": 118,
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
      "start": 186,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 195,
            "end": 205,
            "children": [],
            "closingElement": null,
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
      "start": 213,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 245,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 221,
            "end": 245,
            "children": [],
            "closingElement": null,
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
                      "raw": "10",
                      "value": 10
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
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 222,
                "end": 228,
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
      "start": 256,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 262,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 265,
            "end": 281,
            "children": [],
            "closingElement": null,
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
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 266,
                "end": 272,
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
