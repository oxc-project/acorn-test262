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
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "ElementChildrenAttribute",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "attributes": [],
            "exportKind": "type"
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
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "className",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "NoticeList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 162,
          "end": 174,
          "name": "props",
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
                "name": "Props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": {
            "type": "JSXIdentifier",
            "start": 197,
            "end": 207,
            "name": "NoticeList"
          },
          "selfClosing": false,
          "typeArguments": null
        },
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
        },
        "children": [
          {
            "type": "JSXText",
            "start": 235,
            "end": 236,
            "value": "\n",
            "raw": "\n"
          }
        ]
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
          "name": {
            "type": "JSXIdentifier",
            "start": 253,
            "end": 263,
            "name": "NoticeList"
          },
          "selfClosing": false,
          "typeArguments": null
        },
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
        },
        "children": [
          {
            "type": "JSXText",
            "start": 291,
            "end": 293,
            "value": "\n\n",
            "raw": "\n\n"
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
