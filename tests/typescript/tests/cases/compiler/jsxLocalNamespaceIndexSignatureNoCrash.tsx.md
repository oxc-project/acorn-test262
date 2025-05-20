__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 276,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 87,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 87,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 87,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 85,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 31,
                "decorators": [],
                "name": "jsx",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 31,
                "end": 85,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 34,
                  "end": 85,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 44,
                      "end": 79,
                      "argument": {
                        "type": "CallExpression",
                        "start": 51,
                        "end": 78,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 74,
                            "end": 77,
                            "raw": "'p'",
                            "value": "p"
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 51,
                          "end": 73,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 59,
                            "decorators": [],
                            "name": "document",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 73,
                            "decorators": [],
                            "name": "createElement",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 89,
      "end": 231,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 96,
        "end": 231,
        "body": {
          "type": "TSModuleBlock",
          "start": 108,
          "end": 231,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 114,
              "end": 229,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 121,
                "end": 229,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 135,
                  "end": 229,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 145,
                      "end": 223,
                      "attributes": [],
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "start": 152,
                        "end": 223,
                        "declare": false,
                        "id": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 174,
                          "decorators": [],
                          "name": "IntrinsicElements",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 177,
                          "end": 222,
                          "members": [
                            {
                              "type": "TSIndexSignature",
                              "start": 191,
                              "end": 212,
                              "accessibility": null,
                              "parameters": [
                                {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 205,
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 197,
                                    "end": 205,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 199,
                                      "end": 205
                                    }
                                  }
                                }
                              ],
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 206,
                                "end": 211,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 208,
                                  "end": 211
                                }
                              }
                            }
                          ]
                        },
                        "typeParameters": null
                      },
                      "exportKind": "type",
                      "source": null,
                      "specifiers": []
                    }
                  ]
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 134,
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "namespace"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 233,
      "end": 276,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 246,
        "end": 276,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 252,
            "end": 274,
            "argument": {
              "type": "JSXElement",
              "start": 260,
              "end": 272,
              "children": [
                {
                  "type": "JSXText",
                  "start": 263,
                  "end": 268,
                  "raw": "Hello",
                  "value": "Hello"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 268,
                "end": 272,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 270,
                  "end": 271,
                  "name": "p"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 260,
                "end": 263,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 261,
                  "end": 262,
                  "name": "p"
                },
                "selfClosing": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 243,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
