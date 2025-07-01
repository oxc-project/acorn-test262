__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 60,
        "end": 67
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 94
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "do-",
                                "cooked": "do-"
                              },
                              "tail": false,
                              "start": 111,
                              "end": 117
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 123,
                              "end": 125
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 117,
                              "end": 123
                            }
                          ],
                          "start": 111,
                          "end": 125
                        },
                        "start": 109,
                        "end": 125
                      },
                      "start": 106,
                      "end": 125
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 128,
                      "end": 136
                    },
                    "start": 126,
                    "end": 136
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 105,
                  "end": 137
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "ns:thing",
                    "raw": "\"ns:thing\"",
                    "start": 146,
                    "end": 156
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 159,
                      "end": 165
                    },
                    "start": 157,
                    "end": 165
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 146,
                  "end": 166
                }
              ],
              "start": 95,
              "end": 172
            },
            "declare": false,
            "start": 74,
            "end": 172
          }
        ],
        "start": 68,
        "end": 174
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 45,
      "end": 174
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 192
            },
            "init": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 196,
                  "end": 199
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXNamespacedName",
                      "namespace": {
                        "type": "JSXIdentifier",
                        "name": "ns",
                        "start": 200,
                        "end": 202
                      },
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "thing",
                        "start": 203,
                        "end": 208
                      },
                      "start": 200,
                      "end": 208
                    },
                    "value": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 209,
                      "end": 212
                    },
                    "start": 200,
                    "end": 212
                  }
                ],
                "selfClosing": true,
                "start": 195,
                "end": 214
              },
              "children": [],
              "closingElement": null,
              "start": 195,
              "end": 214
            },
            "definite": false,
            "start": 189,
            "end": 214
          }
        ],
        "declare": false,
        "start": 183,
        "end": 214
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 176,
      "end": 214
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 214
}
```
