__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 214,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 174,
      "id": {
        "type": "Literal",
        "start": 60,
        "end": 67,
        "value": "react",
        "raw": "\"react\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 174,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 74,
            "end": 172,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 94,
              "name": "Attributes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 95,
              "end": 172,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 105,
                  "end": 137,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 106,
                      "end": 125,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 109,
                        "end": 125,
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "start": 111,
                          "end": 125,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 111,
                              "end": 117,
                              "value": {
                                "cooked": "do-",
                                "raw": "do-"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 123,
                              "end": 125,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 117,
                              "end": 123
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 136,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 136,
                        "name": "Function",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                },
                {
                  "type": "TSPropertySignature",
                  "start": 146,
                  "end": 166,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 146,
                    "end": 156,
                    "value": "ns:thing",
                    "raw": "\"ns:thing\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 157,
                    "end": 165,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 159,
                      "end": 165
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 176,
      "end": 214,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 183,
        "end": 214,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 189,
            "end": 214,
            "id": {
              "type": "Identifier",
              "start": 189,
              "end": 192,
              "name": "tag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "JSXElement",
              "start": 195,
              "end": 214,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 195,
                "end": 214,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 200,
                    "end": 212,
                    "name": {
                      "type": "JSXNamespacedName",
                      "start": 200,
                      "end": 208,
                      "namespace": {
                        "type": "JSXIdentifier",
                        "start": 200,
                        "end": 202,
                        "name": "ns"
                      },
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 203,
                        "end": 208,
                        "name": "thing"
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "start": 209,
                      "end": 212,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 196,
                  "end": 199,
                  "name": "div"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
