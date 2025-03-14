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
      "end": 66,
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
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "false",
                  "value": false
                }
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
      "start": 67,
      "end": 173,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 173,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 122,
            "end": 171,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 128,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 171,
              "async": false,
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 153,
                          "end": 158,
                          "raw": "Hello",
                          "value": "Hello"
                        }
                      ],
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
                        "selfClosing": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 81,
        "decorators": [],
        "name": "Poisoned",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 90,
        "end": 105,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 90,
          "end": 95,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 96,
          "end": 105,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
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
              "decorators": [],
              "name": "Prop",
              "optional": false
            }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 192,
            "end": 205,
            "children": [],
            "closingElement": null,
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
              "selfClosing": true
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
