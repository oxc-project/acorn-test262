__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 243,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 71,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 73,
      "end": 243,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 90,
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 99,
        "end": 114,
        "object": {
          "type": "Identifier",
          "start": 99,
          "end": 104,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 105,
          "end": 114,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 114,
        "end": 157,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 115,
            "end": 152,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 116,
                "end": 137,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 126,
                  "decorators": [],
                  "name": "dataSource",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 126,
                  "end": 136,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 128,
                    "end": 136,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 128,
                      "end": 134
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 138,
                "end": 151,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 145,
                  "decorators": [],
                  "name": "onClick",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 146,
                  "end": 151,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 148,
                    "end": 151
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 154,
            "end": 156,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 158,
        "end": 243,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 164,
            "end": 241,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 170,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 241,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 173,
                "end": 241,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 183,
                    "end": 235,
                    "argument": {
                      "type": "JSXElement",
                      "start": 191,
                      "end": 233,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 191,
                        "end": 227,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 192,
                          "end": 195,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 196,
                            "end": 211,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 200,
                              "end": 210,
                              "object": {
                                "type": "ThisExpression",
                                "start": 200,
                                "end": 204
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 205,
                                "end": 210,
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 212,
                            "end": 226,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 212,
                              "end": 221,
                              "name": "className"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 222,
                              "end": 226,
                              "value": "ok",
                              "raw": "\"ok\""
                            }
                          }
                        ],
                        "selfClosing": false
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 227,
                        "end": 233,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 229,
                          "end": 232,
                          "name": "div"
                        }
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
