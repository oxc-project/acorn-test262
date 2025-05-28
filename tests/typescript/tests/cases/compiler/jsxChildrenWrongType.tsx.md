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
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 124,
        "decorators": [],
        "name": "PropsType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 125,
        "end": 181,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 131,
            "end": 179,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 139,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 169,
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    }
                  }
                ]
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
      "start": 182,
      "end": 241,
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
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 208,
        "end": 223,
        "object": {
          "type": "Identifier",
          "start": 208,
          "end": 213,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 214,
          "end": 223,
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
        "start": 223,
        "end": 238,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 224,
            "end": 233,
            "typeName": {
              "type": "Identifier",
              "start": 224,
              "end": 233,
              "decorators": [],
              "name": "PropsType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 235,
            "end": 237,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 239,
        "end": 241,
        "body": []
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 320,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 319,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 258,
              "end": 263,
              "name": {
                "type": "JSXIdentifier",
                "start": 259,
                "end": 262,
                "name": "Foo"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 263,
                "end": 272,
                "value": "\n        ",
                "raw": "\n        "
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
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 273,
                      "end": 279,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 274,
                        "end": 277,
                        "name": "div"
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true
                    },
                    "children": [],
                    "closingElement": null
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
                "value": "\n        ",
                "raw": "\n        "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 300,
                "end": 306,
                "expression": {
                  "type": "Literal",
                  "start": 301,
                  "end": 305,
                  "value": "aa",
                  "raw": "\"aa\""
                }
              },
              {
                "type": "JSXText",
                "start": 306,
                "end": 311,
                "value": "\n    ",
                "raw": "\n    "
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
