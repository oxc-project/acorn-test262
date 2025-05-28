__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "react",
        "raw": "'react'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 53,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 26,
            "end": 51,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 41,
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 41,
              "end": 47,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 42,
                  "end": 43,
                  "name": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 45,
                  "end": 46,
                  "name": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 48,
              "end": 51,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 202,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 202,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 50,
          "decorators": [],
          "name": "Text",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "start": 59,
          "end": 74,
          "object": {
            "type": "Identifier",
            "start": 59,
            "end": 64,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 74,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 74,
          "end": 82,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 75,
              "end": 77,
              "members": []
            },
            {
              "type": "TSTypeLiteral",
              "start": 79,
              "end": 81,
              "members": []
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 83,
          "end": 202,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 87,
              "end": 111,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 87,
                "end": 95,
                "decorators": [],
                "name": "_tagName",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 95,
                "end": 102,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 97,
                  "end": 102,
                  "literal": {
                    "type": "Literal",
                    "start": 97,
                    "end": 102,
                    "value": "div",
                    "raw": "\"div\""
                  }
                }
              },
              "value": {
                "type": "Literal",
                "start": 105,
                "end": 110,
                "value": "div",
                "raw": "'div'"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 115,
              "end": 200,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 115,
                "end": 121,
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 121,
                "end": 200,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 124,
                  "end": 200,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 130,
                      "end": 196,
                      "argument": {
                        "type": "JSXElement",
                        "start": 145,
                        "end": 189,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 145,
                          "end": 160,
                          "name": {
                            "type": "JSXMemberExpression",
                            "start": 146,
                            "end": 159,
                            "object": {
                              "type": "JSXIdentifier",
                              "start": 146,
                              "end": 150,
                              "name": "this"
                            },
                            "property": {
                              "type": "JSXIdentifier",
                              "start": 151,
                              "end": 159,
                              "name": "_tagName"
                            }
                          },
                          "typeArguments": null,
                          "attributes": [],
                          "selfClosing": false
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 160,
                            "end": 173,
                            "value": " Hello world ",
                            "raw": " Hello world "
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "start": 173,
                          "end": 189,
                          "name": {
                            "type": "JSXMemberExpression",
                            "start": 175,
                            "end": 188,
                            "object": {
                              "type": "JSXIdentifier",
                              "start": 175,
                              "end": 179,
                              "name": "this"
                            },
                            "property": {
                              "type": "JSXIdentifier",
                              "start": 180,
                              "end": 188,
                              "name": "_tagName"
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
