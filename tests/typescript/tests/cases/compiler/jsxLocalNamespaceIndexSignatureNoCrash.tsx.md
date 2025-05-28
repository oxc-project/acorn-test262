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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 87,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 87,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 85,
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
              "value": {
                "type": "FunctionExpression",
                "start": 31,
                "end": 85,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 51,
                          "end": 73,
                          "object": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 59,
                            "decorators": [],
                            "name": "document",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 73,
                            "decorators": [],
                            "name": "createElement",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 74,
                            "end": 77,
                            "value": "p",
                            "raw": "'p'"
                          }
                        ],
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 89,
      "end": 231,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 96,
        "end": 231,
        "id": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 108,
          "end": 231,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 114,
              "end": 229,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 121,
                "end": 229,
                "id": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 134,
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 135,
                  "end": 229,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 145,
                      "end": 223,
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "start": 152,
                        "end": 223,
                        "id": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 174,
                          "decorators": [],
                          "name": "IntrinsicElements",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 177,
                          "end": 222,
                          "members": [
                            {
                              "type": "TSIndexSignature",
                              "start": 191,
                              "end": 212,
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
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 206,
                                "end": 211,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 208,
                                  "end": 211
                                }
                              },
                              "readonly": false,
                              "static": false,
                              "accessibility": null
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
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 233,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 243,
        "decorators": [],
        "name": "A",
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 260,
                "end": 263,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 261,
                  "end": 262,
                  "name": "p"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 263,
                  "end": 268,
                  "value": "Hello",
                  "raw": "Hello"
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
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
