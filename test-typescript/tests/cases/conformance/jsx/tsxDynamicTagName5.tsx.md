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
  "end": 176,
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
      "end": 176,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 176,
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
          "end": 176,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 87,
              "end": 112,
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
                "start": 106,
                "end": 111,
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
                "end": 103,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 97,
                  "end": 103
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 116,
              "end": 174,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 116,
                "end": 122,
                "name": "render",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 122,
                "end": 174,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 125,
                  "end": 174,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 131,
                      "end": 170,
                      "argument": {
                        "type": "JSXElement",
                        "start": 146,
                        "end": 163,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 146,
                          "end": 163,
                          "attributes": [],
                          "name": {
                            "type": "JSXMemberExpression",
                            "start": 147,
                            "end": 160,
                            "object": {
                              "type": "JSXIdentifier",
                              "start": 147,
                              "end": 151,
                              "name": "this"
                            },
                            "property": {
                              "type": "JSXIdentifier",
                              "start": 152,
                              "end": 160,
                              "name": "_tagName"
                            }
                          },
                          "selfClosing": true,
                          "typeArguments": null
                        },
                        "closingElement": null,
                        "children": []
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
