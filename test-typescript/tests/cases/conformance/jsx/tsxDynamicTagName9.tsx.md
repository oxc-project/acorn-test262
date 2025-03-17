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
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 41,
              "name": "Component",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 48,
              "end": 51,
              "body": []
            },
            "decorators": [],
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 50,
          "name": "Text",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 59,
          "end": 74,
          "object": {
            "type": "Identifier",
            "start": 59,
            "end": 64,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 74,
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
          "start": 83,
          "end": 202,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 87,
              "end": 111,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 87,
                "end": 95,
                "name": "_tagName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 105,
                "end": 110,
                "value": "div",
                "raw": "'div'"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 115,
              "end": 200,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 115,
                "end": 121,
                "name": "render",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 121,
                "end": 200,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "attributes": [],
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
                          "selfClosing": false,
                          "typeArguments": null
                        },
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
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 160,
                            "end": 173,
                            "value": " Hello world ",
                            "raw": " Hello world "
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
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
