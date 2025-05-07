__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 157,
  "end": 363,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 157,
      "end": 224,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 224,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 183,
            "end": 222,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 191,
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
              "start": 191,
              "end": 221,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 193,
                "end": 221,
                "types": [
                  {
                    "type": "TSTupleType",
                    "start": 193,
                    "end": 209,
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 194,
                        "end": 200
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 202,
                        "end": 208
                      }
                    ]
                  },
                  {
                    "type": "TSArrayType",
                    "start": 212,
                    "end": 221,
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 212,
                      "end": 219
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
        "start": 167,
        "end": 176,
        "decorators": [],
        "name": "PropsType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 225,
      "end": 284,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 282,
        "end": 284,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 242,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 251,
        "end": 266,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 251,
          "end": 256,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 257,
          "end": 266,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 266,
        "end": 281,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 267,
            "end": 276,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 267,
              "end": 276,
              "decorators": [],
              "name": "PropsType",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 278,
            "end": 280,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 362,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 292,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 301,
            "end": 360,
            "children": [
              {
                "type": "JSXText",
                "start": 306,
                "end": 315,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 315,
                "end": 334,
                "expression": {
                  "type": "TSAsExpression",
                  "start": 316,
                  "end": 333,
                  "expression": {
                    "type": "JSXElement",
                    "start": 316,
                    "end": 322,
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 316,
                      "end": 322,
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 317,
                        "end": 320,
                        "name": "div"
                      },
                      "selfClosing": true,
                      "typeArguments": null
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 326,
                    "end": 333
                  }
                }
              },
              {
                "type": "JSXText",
                "start": 334,
                "end": 343,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 343,
                "end": 349,
                "expression": {
                  "type": "Literal",
                  "start": 344,
                  "end": 348,
                  "raw": "\"aa\"",
                  "value": "aa",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "JSXText",
                "start": 349,
                "end": 354,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 354,
              "end": 360,
              "name": {
                "type": "JSXIdentifier",
                "start": 356,
                "end": 359,
                "name": "Foo"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 301,
              "end": 306,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 302,
                "end": 305,
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
