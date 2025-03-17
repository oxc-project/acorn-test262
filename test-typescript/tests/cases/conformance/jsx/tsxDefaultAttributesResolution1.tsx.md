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
      "end": 68,
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
        "end": 68,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 66,
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
              "end": 65,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 58,
                "end": 65
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
      "start": 69,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 83,
        "name": "Poisoned",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 92,
        "end": 107,
        "object": {
          "type": "Identifier",
          "start": 92,
          "end": 97,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 98,
          "end": 107,
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
        "start": 118,
        "end": 175,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 173,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 130,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 173,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 155,
                          "end": 160,
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
        "start": 107,
        "end": 117,
        "params": [
          {
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
          {
            "type": "TSTypeLiteral",
            "start": 114,
            "end": 116,
            "members": []
          }
        ]
      }
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
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 191,
            "end": 204,
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
