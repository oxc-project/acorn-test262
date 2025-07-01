__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tags",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 87
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "span",
              "raw": "\"span\"",
              "start": 90,
              "end": 96
            },
            "start": 90,
            "end": 96
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "div",
              "raw": "\"div\"",
              "start": 99,
              "end": 104
            },
            "start": 99,
            "end": 104
          }
        ],
        "start": 90,
        "end": 104
      },
      "declare": false,
      "start": 78,
      "end": 105
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
              "name": "Hoc",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 123
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 130
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 143
                      },
                      "typeArguments": null,
                      "start": 139,
                      "end": 143
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 127,
                    "end": 143
                  }
                ],
                "start": 126,
                "end": 144
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TagElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 164
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 164
                    },
                    "start": 159,
                    "end": 164
                  },
                  "start": 149,
                  "end": 164
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 174
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SFC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 178
                    },
                    "start": 169,
                    "end": 178
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 178
                },
                "start": 167,
                "end": 178
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 202
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "JSXElement",
                            "openingElement": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "TagElement",
                                "start": 212,
                                "end": 222
                              },
                              "typeArguments": null,
                              "attributes": [],
                              "selfClosing": true,
                              "start": 211,
                              "end": 225
                            },
                            "children": [],
                            "closingElement": null,
                            "start": 211,
                            "end": 225
                          },
                          "id": null,
                          "generator": false,
                          "start": 205,
                          "end": 225
                        },
                        "definite": false,
                        "start": 193,
                        "end": 225
                      }
                    ],
                    "declare": false,
                    "start": 187,
                    "end": 226
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 246
                    },
                    "start": 230,
                    "end": 247
                  }
                ],
                "start": 182,
                "end": 249
              },
              "id": null,
              "generator": false,
              "start": 126,
              "end": 249
            },
            "definite": false,
            "start": 120,
            "end": 249
          }
        ],
        "declare": false,
        "start": 114,
        "end": 250
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 250
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 250
}
```
