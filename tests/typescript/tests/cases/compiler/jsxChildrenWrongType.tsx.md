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
        "start": 115,
        "end": 124
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
              "start": 131,
              "end": 139
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
                        "start": 142,
                        "end": 148
                      },
                      {
                        "type": "TSOptionalType",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 150,
                          "end": 156
                        },
                        "start": 150,
                        "end": 157
                      }
                    ],
                    "start": 141,
                    "end": 158
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 169
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 170,
                          "end": 177
                        }
                      ],
                      "start": 169,
                      "end": 178
                    },
                    "start": 161,
                    "end": 178
                  }
                ],
                "start": 141,
                "end": 178
              },
              "start": 139,
              "end": 178
            },
            "accessibility": null,
            "static": false,
            "start": 131,
            "end": 179
          }
        ],
        "start": 125,
        "end": 181
      },
      "declare": false,
      "start": 105,
      "end": 181
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
        "start": 196,
        "end": 199
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
          "start": 208,
          "end": 213
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 223
        },
        "optional": false,
        "computed": false,
        "start": 208,
        "end": 223
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
              "start": 224,
              "end": 233
            },
            "typeArguments": null,
            "start": 224,
            "end": 233
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 235,
            "end": 237
          }
        ],
        "start": 223,
        "end": 238
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 239,
        "end": 241
      },
      "abstract": false,
      "declare": true,
      "start": 182,
      "end": 241
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
            "start": 248,
            "end": 249
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 259,
                "end": 262
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 258,
              "end": 263
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 263,
                "end": 272
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
                        "start": 274,
                        "end": 277
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 273,
                      "end": 279
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 273,
                    "end": 279
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 283,
                    "end": 290
                  },
                  "start": 273,
                  "end": 290
                },
                "start": 272,
                "end": 291
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 291,
                "end": 300
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "aa",
                  "raw": "\"aa\"",
                  "start": 301,
                  "end": 305
                },
                "start": 300,
                "end": 306
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 306,
                "end": 311
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 313,
                "end": 316
              },
              "start": 311,
              "end": 317
            },
            "start": 258,
            "end": 317
          },
          "definite": false,
          "start": 248,
          "end": 319
        }
      ],
      "declare": false,
      "start": 242,
      "end": 320
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 105,
  "end": 320
}
```
