__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "jsx",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 31
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "document",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 51,
                            "end": 59
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "createElement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 60,
                            "end": 73
                          },
                          "optional": false,
                          "computed": false,
                          "start": 51,
                          "end": 73
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "p",
                            "raw": "'p'",
                            "start": 74,
                            "end": 77
                          }
                        ],
                        "optional": false,
                        "start": 51,
                        "end": 78
                      },
                      "start": 44,
                      "end": 79
                    }
                  ],
                  "start": 34,
                  "end": 85
                },
                "expression": false,
                "start": 31,
                "end": 85
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 21,
              "end": 85
            }
          ],
          "start": 15,
          "end": 87
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 87
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 87
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 107
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 134
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IntrinsicElements",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 174
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSIndexSignature",
                              "parameters": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 199,
                                      "end": 205
                                    },
                                    "start": 197,
                                    "end": 205
                                  },
                                  "start": 192,
                                  "end": 205
                                }
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 208,
                                  "end": 211
                                },
                                "start": 206,
                                "end": 211
                              },
                              "readonly": false,
                              "static": false,
                              "accessibility": null,
                              "start": 191,
                              "end": 212
                            }
                          ],
                          "start": 177,
                          "end": 222
                        },
                        "declare": false,
                        "start": 152,
                        "end": 223
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 145,
                      "end": 223
                    }
                  ],
                  "start": 135,
                  "end": 229
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 121,
                "end": 229
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 114,
              "end": 229
            }
          ],
          "start": 108,
          "end": 231
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 96,
        "end": 231
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 89,
      "end": 231
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 243
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
                  "name": "p",
                  "start": 261,
                  "end": 262
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 260,
                "end": 263
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hello",
                  "raw": "Hello",
                  "start": 263,
                  "end": 268
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "p",
                  "start": 270,
                  "end": 271
                },
                "start": 268,
                "end": 272
              },
              "start": 260,
              "end": 272
            },
            "start": 252,
            "end": 274
          }
        ],
        "start": 246,
        "end": 276
      },
      "expression": false,
      "start": 233,
      "end": 276
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 276
}
```
