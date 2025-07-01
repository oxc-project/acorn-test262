__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "css",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 128
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "css",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 128
          },
          "importKind": "value",
          "start": 125,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@emotion/react",
        "raw": "\"@emotion/react\"",
        "start": 136,
        "end": 152
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 116,
      "end": 153
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 188
        },
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
                    "type": "JSXIdentifier",
                    "name": "input",
                    "start": 209,
                    "end": 214
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "css",
                        "start": 221,
                        "end": 224
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "css",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 226,
                            "end": 229
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "\n        color: red;\n      ",
                                  "cooked": "\n        color: red;\n      "
                                },
                                "tail": true,
                                "start": 229,
                                "end": 258
                              }
                            ],
                            "expressions": [],
                            "start": 229,
                            "end": 258
                          },
                          "start": 226,
                          "end": 258
                        },
                        "start": 225,
                        "end": 259
                      },
                      "start": 221,
                      "end": 259
                    }
                  ],
                  "selfClosing": true,
                  "start": 208,
                  "end": 266
                },
                "children": [],
                "closingElement": null,
                "start": 208,
                "end": 266
              },
              "start": 195,
              "end": 271
            }
          ],
          "start": 191,
          "end": 273
        },
        "expression": false,
        "start": 170,
        "end": 273
      },
      "exportKind": "value",
      "start": 155,
      "end": 273
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 116,
  "end": 273
}
```
