__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsType",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 176
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 191
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
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
                    ],
                    "start": 193,
                    "end": 209
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 212,
                      "end": 219
                    },
                    "start": 212,
                    "end": 221
                  }
                ],
                "start": 193,
                "end": 221
              },
              "start": 191,
              "end": 221
            },
            "accessibility": null,
            "static": false,
            "start": 183,
            "end": 222
          }
        ],
        "start": 177,
        "end": 224
      },
      "declare": false,
      "start": 157,
      "end": 224
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 242
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
          "start": 251,
          "end": 256
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 266
        },
        "optional": false,
        "computed": false,
        "start": 251,
        "end": 266
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsType",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 276
            },
            "typeArguments": null,
            "start": 267,
            "end": 276
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 278,
            "end": 280
          }
        ],
        "start": 266,
        "end": 281
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 282,
        "end": 284
      },
      "abstract": false,
      "declare": true,
      "start": 225,
      "end": 284
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 292
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 302,
                "end": 305
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 301,
              "end": 306
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 306,
                "end": 315
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 317,
                        "end": 320
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 316,
                      "end": 322
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 316,
                    "end": 322
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 326,
                    "end": 333
                  },
                  "start": 316,
                  "end": 333
                },
                "start": 315,
                "end": 334
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 334,
                "end": 343
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "aa",
                  "raw": "\"aa\"",
                  "start": 344,
                  "end": 348
                },
                "start": 343,
                "end": 349
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 349,
                "end": 354
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 356,
                "end": 359
              },
              "start": 354,
              "end": 360
            },
            "start": 301,
            "end": 360
          },
          "definite": false,
          "start": 291,
          "end": 362
        }
      ],
      "declare": false,
      "start": 285,
      "end": 363
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 157,
  "end": 363
}
```
