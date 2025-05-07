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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 53,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 26,
            "end": 51,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 48,
              "end": 51,
              "body": []
            },
            "declare": false,
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
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 41,
              "end": 47,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 42,
                  "end": 43,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 45,
                  "end": 46,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "raw": "'react'",
        "value": "react",
        "regex": null,
        "bigint": null
      }
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "raw": "'react'",
        "value": "react",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 202,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 202,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 83,
          "end": 202,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 87,
              "end": 111,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 87,
                "end": 95,
                "decorators": [],
                "name": "_tagName",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
                    "raw": "\"div\"",
                    "value": "div",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "value": {
                "type": "Literal",
                "start": 105,
                "end": 110,
                "raw": "'div'",
                "value": "div",
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 115,
              "end": 200,
              "accessibility": null,
              "computed": false,
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
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 121,
                "end": 200,
                "async": false,
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
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 160,
                            "end": 173,
                            "raw": " Hello world ",
                            "value": " Hello world "
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
                        },
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
          "start": 46,
          "end": 50,
          "decorators": [],
          "name": "Text",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 59,
          "end": 74,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 59,
            "end": 64,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 74,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          }
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
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
