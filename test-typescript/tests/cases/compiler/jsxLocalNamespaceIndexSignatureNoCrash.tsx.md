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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 87,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 85,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 31,
                "name": "jsx",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 31,
                "end": 85,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "name": "document",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 73,
                            "name": "createElement",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 74,
                            "end": 77,
                            "value": "p",
                            "raw": "'p'"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                  "name": "JSX",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                          "name": "IntrinsicElements",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                  "name": "other",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 197,
                                    "end": 205,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 199,
                                      "end": 205
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
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
                      "attributes": [],
                      "exportKind": "type"
                    }
                  ]
                },
                "kind": "namespace",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 233,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 243,
        "name": "A",
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 261,
                  "end": 262,
                  "name": "p"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
              "children": [
                {
                  "type": "JSXText",
                  "start": 263,
                  "end": 268,
                  "value": "Hello",
                  "raw": "Hello"
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
