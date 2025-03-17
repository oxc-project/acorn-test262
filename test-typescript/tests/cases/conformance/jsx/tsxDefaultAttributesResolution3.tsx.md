__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 206,
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
      "end": 66,
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
        "end": 66,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 64,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 63,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 58,
                "end": 63,
                "literal": {
                  "type": "Literal",
                  "start": 58,
                  "end": 63,
                  "value": false,
                  "raw": "false"
                }
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
      "start": 67,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 81,
        "name": "Poisoned",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 90,
        "end": 105,
        "object": {
          "type": "Identifier",
          "start": 90,
          "end": 95,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 96,
          "end": 105,
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
        "start": 116,
        "end": 173,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 122,
            "end": 171,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 128,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 171,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 171,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 141,
                    "end": 165,
                    "argument": {
                      "type": "JSXElement",
                      "start": 148,
                      "end": 164,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 148,
                        "end": 153,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 149,
                          "end": 152,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 158,
                        "end": 164,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 160,
                          "end": 163,
                          "name": "div"
                        }
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 153,
                          "end": 158,
                          "value": "Hello",
                          "raw": "Hello"
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
        "start": 105,
        "end": 115,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 106,
            "end": 110,
            "typeName": {
              "type": "Identifier",
              "start": 106,
              "end": 110,
              "name": "Prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 112,
            "end": 114,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 192,
            "end": 205,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 192,
              "end": 205,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 202,
                  "end": 203,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 202,
                    "end": 203,
                    "name": "x"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 193,
                "end": 201,
                "name": "Poisoned"
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
