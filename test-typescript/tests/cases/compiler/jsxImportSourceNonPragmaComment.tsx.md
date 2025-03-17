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
            "name": "css",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 125,
            "end": 128,
            "name": "css",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                            "name": "css",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 229,
                            "end": 258,
                            "expressions": [],
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
                            ]
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 209,
                    "end": 214,
                    "name": "input"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
