__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 105,
  "end": 320,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 105,
      "end": 181,
      "body": {
        "type": "TSInterfaceBody",
        "start": 125,
        "end": 181,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 131,
            "end": 179,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 139,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 178,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 141,
                "end": 178,
                "types": [
                  {
                    "type": "TSTupleType",
                    "start": 141,
                    "end": 158,
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 142,
                        "end": 148
                      },
                      {
                        "type": "TSOptionalType",
                        "start": 150,
                        "end": 157,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 150,
                          "end": 156
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 161,
                    "end": 178,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 169,
                      "end": 178,
                      "params": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 170,
                          "end": 177
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 169,
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 124,
        "decorators": [],
        "name": "PropsType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 182,
      "end": 241,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 239,
        "end": 241,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 199,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 208,
        "end": 223,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 208,
          "end": 213,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 214,
          "end": 223,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 223,
        "end": 238,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 224,
            "end": 233,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 224,
              "end": 233,
              "decorators": [],
              "name": "PropsType",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 235,
            "end": 237,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 319,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 258,
            "end": 317,
            "children": [
              {
                "type": "JSXText",
                "start": 263,
                "end": 272,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 272,
                "end": 291,
                "expression": {
                  "type": "TSAsExpression",
                  "start": 273,
                  "end": 290,
                  "expression": {
                    "type": "JSXElement",
                    "start": 273,
                    "end": 279,
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 273,
                      "end": 279,
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 274,
                        "end": 277,
                        "name": "div"
                      },
                      "selfClosing": true,
                      "typeArguments": null
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 283,
                    "end": 290
                  }
                }
              },
              {
                "type": "JSXText",
                "start": 291,
                "end": 300,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 300,
                "end": 306,
                "expression": {
                  "type": "Literal",
                  "start": 301,
                  "end": 305,
                  "raw": "\"aa\"",
                  "value": "aa"
                }
              },
              {
                "type": "JSXText",
                "start": 306,
                "end": 311,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 311,
              "end": 317,
              "name": {
                "type": "JSXIdentifier",
                "start": 313,
                "end": 316,
                "name": "Foo"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 258,
              "end": 263,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 259,
                "end": 262,
                "name": "Foo"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
