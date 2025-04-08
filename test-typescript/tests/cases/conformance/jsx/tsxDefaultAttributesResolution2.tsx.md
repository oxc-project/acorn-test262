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
      "end": 65,
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
        "end": 65,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 63,
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
              "end": 62,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 58,
                "end": 62,
                "literal": {
                  "type": "Literal",
                  "start": 58,
                  "end": 62,
                  "value": true,
                  "raw": "true"
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
      "start": 66,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 80,
        "name": "Poisoned",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 89,
        "end": 104,
        "object": {
          "type": "Identifier",
          "start": 89,
          "end": 94,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 95,
          "end": 104,
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
        "start": 115,
        "end": 172,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 170,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 127,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 170,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 152,
                          "end": 157,
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
        "start": 104,
        "end": 114,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 105,
            "end": 109,
            "typeName": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "name": "Prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 111,
            "end": 113,
            "members": []
          }
        ]
      }
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
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 188,
            "end": 201,
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
