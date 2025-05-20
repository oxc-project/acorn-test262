__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
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
          "value": "react"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 68,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 68,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 65,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 58,
                "end": 65
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
      "start": 69,
      "end": 175,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 118,
        "end": 175,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 173,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 130,
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
              "start": 130,
              "end": 173,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 173,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 143,
                    "end": 167,
                    "argument": {
                      "type": "JSXElement",
                      "start": 150,
                      "end": 166,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 155,
                          "end": 160,
                          "raw": "Hello",
                          "value": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 160,
                        "end": 166,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 162,
                          "end": 165,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 150,
                        "end": 155,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 151,
                          "end": 154,
                          "name": "div"
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
        "start": 75,
        "end": 83,
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 92,
        "end": 107,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 92,
          "end": 97,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 98,
          "end": 107,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 107,
        "end": 117,
        "params": [
          {
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
          {
            "type": "TSTypeLiteral",
            "start": 114,
            "end": 116,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 191,
            "end": 204,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 191,
              "end": 204,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 201,
                  "end": 202,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 201,
                    "end": 202,
                    "name": "x"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 192,
                "end": 200,
                "name": "Poisoned"
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
