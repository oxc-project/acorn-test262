__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 307,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 85,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 83,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 25,
              "end": 83,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 59,
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 60,
                "end": 83,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 66,
                    "end": 79,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 74,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 74,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 76,
                        "end": 78,
                        "members": []
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 87,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 102,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 103,
        "end": 140,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 107,
            "end": 138,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 116,
              "decorators": [],
              "name": "className",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 137,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 119,
                "end": 137,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 119,
                    "end": 125
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 128,
                    "end": 137
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
      "type": "FunctionDeclaration",
      "start": 142,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 161,
        "decorators": [],
        "name": "NoticeList",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 162,
          "end": 174,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 169,
              "end": 174,
              "typeName": {
                "type": "Identifier",
                "start": 169,
                "end": 174,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 176,
        "end": 194,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 180,
            "end": 192,
            "argument": {
              "type": "Literal",
              "start": 187,
              "end": 191,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 250,
      "expression": {
        "type": "JSXElement",
        "start": 196,
        "end": 249,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 196,
          "end": 235,
          "name": {
            "type": "JSXIdentifier",
            "start": 197,
            "end": 207,
            "name": "NoticeList"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 208,
              "end": 234,
              "name": {
                "type": "JSXIdentifier",
                "start": 208,
                "end": 217,
                "name": "className"
              },
              "value": {
                "type": "Literal",
                "start": 218,
                "end": 234,
                "value": "my-notice-list",
                "raw": "\"my-notice-list\""
              }
            }
          ],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 235,
            "end": 236,
            "value": "\n",
            "raw": "\n"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 236,
          "end": 249,
          "name": {
            "type": "JSXIdentifier",
            "start": 238,
            "end": 248,
            "name": "NoticeList"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 252,
      "end": 307,
      "expression": {
        "type": "JSXElement",
        "start": 252,
        "end": 306,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 252,
          "end": 291,
          "name": {
            "type": "JSXIdentifier",
            "start": 253,
            "end": 263,
            "name": "NoticeList"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 264,
              "end": 290,
              "name": {
                "type": "JSXIdentifier",
                "start": 264,
                "end": 273,
                "name": "className"
              },
              "value": {
                "type": "Literal",
                "start": 274,
                "end": 290,
                "value": "my-notice-list",
                "raw": "\"my-notice-list\""
              }
            }
          ],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 291,
            "end": 293,
            "value": "\n\n",
            "raw": "\n\n"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 293,
          "end": 306,
          "name": {
            "type": "JSXIdentifier",
            "start": 295,
            "end": 305,
            "name": "NoticeList"
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
