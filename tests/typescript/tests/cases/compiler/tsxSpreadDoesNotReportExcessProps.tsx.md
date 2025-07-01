__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 90
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 104
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 114
        },
        "optional": false,
        "computed": false,
        "start": 99,
        "end": 114
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dataSource",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 126
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 128,
                      "end": 134
                    },
                    "start": 128,
                    "end": 136
                  },
                  "start": 126,
                  "end": 136
                },
                "accessibility": null,
                "static": false,
                "start": 116,
                "end": 137
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onClick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 145
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 148,
                    "end": 151
                  },
                  "start": 146,
                  "end": 151
                },
                "accessibility": null,
                "static": false,
                "start": 138,
                "end": 151
              }
            ],
            "start": 115,
            "end": 152
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 154,
            "end": 156
          }
        ],
        "start": 114,
        "end": 157
      },
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
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 170
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
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 192,
                          "end": 195
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 200,
                                "end": 204
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 205,
                                "end": 210
                              },
                              "optional": false,
                              "computed": false,
                              "start": 200,
                              "end": 210
                            },
                            "start": 196,
                            "end": 211
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "className",
                              "start": 212,
                              "end": 221
                            },
                            "value": {
                              "type": "Literal",
                              "value": "ok",
                              "raw": "\"ok\"",
                              "start": 222,
                              "end": 226
                            },
                            "start": 212,
                            "end": 226
                          }
                        ],
                        "selfClosing": false,
                        "start": 191,
                        "end": 227
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 229,
                          "end": 232
                        },
                        "start": 227,
                        "end": 233
                      },
                      "start": 191,
                      "end": 233
                    },
                    "start": 183,
                    "end": 235
                  }
                ],
                "start": 173,
                "end": 241
              },
              "expression": false,
              "start": 170,
              "end": 241
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 164,
            "end": 241
          }
        ],
        "start": 158,
        "end": 243
      },
      "abstract": false,
      "declare": false,
      "start": 73,
      "end": 243
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 243
}
```
