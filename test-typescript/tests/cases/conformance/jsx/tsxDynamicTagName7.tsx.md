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
              "optional": false
            },
            "implements": [],
            "superClass": null,
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
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 45,
                  "end": 46,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "U",
                    "optional": false
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
        "value": "react"
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
  "end": 194,
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
        "value": "react"
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 194,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 194,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 83,
          "end": 194,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 87,
              "end": 112,
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
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 95,
                "end": 103,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 97,
                  "end": 103
                }
              },
              "value": {
                "type": "Literal",
                "start": 106,
                "end": 111,
                "raw": "'div'",
                "value": "div"
              }
            },
            {
              "type": "MethodDefinition",
              "start": 116,
              "end": 192,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 116,
                "end": 122,
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
                "start": 122,
                "end": 192,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 125,
                  "end": 192,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 131,
                      "end": 188,
                      "argument": {
                        "type": "JSXElement",
                        "start": 146,
                        "end": 153,
                        "children": [],
                        "closingElement": null,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 146,
                          "end": 153,
                          "attributes": [],
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 147,
                            "end": 151,
                            "name": "this"
                          },
                          "selfClosing": true
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
          "start": 46,
          "end": 50,
          "decorators": [],
          "name": "Text",
          "optional": false
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
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 74,
            "decorators": [],
            "name": "Component",
            "optional": false
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
        }
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
