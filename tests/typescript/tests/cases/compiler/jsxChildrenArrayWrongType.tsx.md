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
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 176,
        "decorators": [],
        "name": "PropsType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 224,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 183,
            "end": 222,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 191,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
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
      "start": 225,
      "end": 284,
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
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 251,
        "end": 266,
        "object": {
          "type": "Identifier",
          "start": 251,
          "end": 256,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 257,
          "end": 266,
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
        "start": 266,
        "end": 281,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 267,
            "end": 276,
            "typeName": {
              "type": "Identifier",
              "start": 267,
              "end": 276,
              "decorators": [],
              "name": "PropsType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 278,
            "end": 280,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 282,
        "end": 284,
        "body": []
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 363,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 362,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 301,
              "end": 306,
              "name": {
                "type": "JSXIdentifier",
                "start": 302,
                "end": 305,
                "name": "Foo"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 306,
                "end": 315,
                "value": "\n        ",
                "raw": "\n        "
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
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 316,
                      "end": 322,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 317,
                        "end": 320,
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
                    "start": 326,
                    "end": 333
                  }
                }
              },
              {
                "type": "JSXText",
                "start": 334,
                "end": 343,
                "value": "\n        ",
                "raw": "\n        "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 343,
                "end": 349,
                "expression": {
                  "type": "Literal",
                  "start": 344,
                  "end": 348,
                  "value": "aa",
                  "raw": "\"aa\""
                }
              },
              {
                "type": "JSXText",
                "start": 349,
                "end": 354,
                "value": "\n    ",
                "raw": "\n    "
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
