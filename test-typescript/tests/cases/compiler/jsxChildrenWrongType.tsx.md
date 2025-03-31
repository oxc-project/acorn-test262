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
        "name": "PropsType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 199,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 208,
        "end": 223,
        "object": {
          "type": "Identifier",
          "start": 208,
          "end": 213,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 214,
          "end": 223,
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
        "start": 239,
        "end": 241,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
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
              "name": "PropsType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      }
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
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 258,
            "end": 317,
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
            },
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
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 274,
                        "end": 277,
                        "name": "div"
                      },
                      "selfClosing": true,
                      "typeArguments": null
                    },
                    "closingElement": null,
                    "children": []
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
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
