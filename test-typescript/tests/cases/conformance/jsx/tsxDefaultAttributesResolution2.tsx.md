__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
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
      "end": 65,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 65,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 63,
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
              "end": 62,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 58,
                "end": 62,
                "literal": {
                  "type": "Literal",
                  "start": 58,
                  "end": 62,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 172,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 170,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 127,
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
              "start": 127,
              "end": 170,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 130,
                "end": 170,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 140,
                    "end": 164,
                    "argument": {
                      "type": "JSXElement",
                      "start": 147,
                      "end": 163,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 152,
                          "end": 157,
                          "raw": "Hello",
                          "value": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 157,
                        "end": 163,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 159,
                          "end": 162,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 147,
                        "end": 152,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 148,
                          "end": 151,
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
        "start": 72,
        "end": 80,
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 89,
        "end": 104,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 89,
          "end": 94,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 95,
          "end": 104,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 104,
        "end": 114,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 105,
            "end": 109,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "decorators": [],
              "name": "Prop",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 111,
            "end": 113,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 188,
            "end": 201,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 188,
              "end": 201,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 198,
                  "end": 199,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 198,
                    "end": 199,
                    "name": "x"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 189,
                "end": 197,
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
