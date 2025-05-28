__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 116,
  "end": 273,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 116,
      "end": 153,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 125,
          "end": 128,
          "imported": {
            "type": "Identifier",
            "start": 125,
            "end": 128,
            "decorators": [],
            "name": "css",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 125,
            "end": 128,
            "decorators": [],
            "name": "css",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 136,
        "end": 152,
        "value": "@emotion/react",
        "raw": "\"@emotion/react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 155,
      "end": 273,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 170,
        "end": 273,
        "id": {
          "type": "Identifier",
          "start": 179,
          "end": 188,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 191,
          "end": 273,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 195,
              "end": 271,
              "argument": {
                "type": "JSXElement",
                "start": 208,
                "end": 266,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 208,
                  "end": 266,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 209,
                    "end": 214,
                    "name": "input"
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 221,
                      "end": 259,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 221,
                        "end": 224,
                        "name": "css"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 225,
                        "end": 259,
                        "expression": {
                          "type": "TaggedTemplateExpression",
                          "start": 226,
                          "end": 258,
                          "tag": {
                            "type": "Identifier",
                            "start": 226,
                            "end": 229,
                            "decorators": [],
                            "name": "css",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 229,
                            "end": 258,
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 229,
                                "end": 258,
                                "value": {
                                  "cooked": "\n        color: red;\n      ",
                                  "raw": "\n        color: red;\n      "
                                },
                                "tail": true
                              }
                            ],
                            "expressions": []
                          }
                        }
                      }
                    }
                  ],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              }
            }
          ]
        },
        "expression": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
