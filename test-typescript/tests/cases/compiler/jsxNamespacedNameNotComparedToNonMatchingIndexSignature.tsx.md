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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 174,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 74,
            "end": 172,
            "body": {
              "type": "TSInterfaceBody",
              "start": 95,
              "end": 172,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 105,
                  "end": 137,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 106,
                      "end": 125,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
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
                              "tail": false,
                              "value": {
                                "cooked": "do-",
                                "raw": "do-"
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 123,
                              "end": 125,
                              "tail": true,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              }
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
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 136,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 136,
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 146,
                  "end": 166,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 146,
                    "end": 156,
                    "raw": "\"ns:thing\"",
                    "value": "ns:thing",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 157,
                    "end": 165,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 159,
                      "end": 165
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 94,
              "decorators": [],
              "name": "Attributes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 60,
        "end": 67,
        "raw": "\"react\"",
        "value": "react",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 176,
      "end": 214,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 183,
        "end": 214,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 189,
            "end": 214,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 189,
              "end": 192,
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "JSXElement",
              "start": 195,
              "end": 214,
              "children": [],
              "closingElement": null,
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
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 203,
                        "end": 208,
                        "name": "thing"
                      },
                      "namespace": {
                        "type": "JSXIdentifier",
                        "start": 200,
                        "end": 202,
                        "name": "ns"
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "start": 209,
                      "end": 212,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
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
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
