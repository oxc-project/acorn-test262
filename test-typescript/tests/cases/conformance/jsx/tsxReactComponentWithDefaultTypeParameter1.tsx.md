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
      "end": 169,
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
        "start": 122,
        "end": 137,
        "object": {
          "type": "Identifier",
          "start": 122,
          "end": 127,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 128,
          "end": 137,
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
        "start": 145,
        "end": 169,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 151,
            "end": 167,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 163,
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
        "end": 113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 112,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 112,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 112,
                "name": "Prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 141,
            "end": 143,
            "members": []
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
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 179,
            "end": 203,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
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
