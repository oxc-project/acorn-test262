__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 15,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 41
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 42,
                    "end": 43
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 42,
                  "end": 43
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 46
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 45,
                  "end": 46
                }
              ],
              "start": 41,
              "end": 47
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 48,
              "end": 51
            },
            "abstract": false,
            "declare": false,
            "start": 26,
            "end": 51
          }
        ],
        "start": 23,
        "end": 53
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 54
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 23,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Text",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 50
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 64
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 74
          },
          "optional": false,
          "computed": false,
          "start": 59,
          "end": 74
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 75,
              "end": 77
            },
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 79,
              "end": 81
            }
          ],
          "start": 74,
          "end": 82
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_tagName",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 95
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 97,
                  "end": 103
                },
                "start": 95,
                "end": 103
              },
              "value": {
                "type": "Literal",
                "value": "div",
                "raw": "'div'",
                "start": 106,
                "end": 111
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 87,
              "end": 112
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 122
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXMemberExpression",
                            "object": {
                              "type": "JSXIdentifier",
                              "name": "this",
                              "start": 147,
                              "end": 151
                            },
                            "property": {
                              "type": "JSXIdentifier",
                              "name": "_tagName",
                              "start": 152,
                              "end": 160
                            },
                            "start": 147,
                            "end": 160
                          },
                          "typeArguments": null,
                          "attributes": [],
                          "selfClosing": true,
                          "start": 146,
                          "end": 163
                        },
                        "children": [],
                        "closingElement": null,
                        "start": 146,
                        "end": 163
                      },
                      "start": 131,
                      "end": 170
                    }
                  ],
                  "start": 125,
                  "end": 174
                },
                "expression": false,
                "start": 122,
                "end": 174
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 116,
              "end": 174
            }
          ],
          "start": 83,
          "end": 176
        },
        "abstract": false,
        "declare": false,
        "start": 40,
        "end": 176
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 176
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
