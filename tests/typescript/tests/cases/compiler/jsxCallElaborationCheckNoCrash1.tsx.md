__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 250,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 78,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 87,
        "decorators": [],
        "name": "Tags",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 90,
        "end": 104,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 90,
            "end": 96,
            "literal": {
              "type": "Literal",
              "start": 90,
              "end": 96,
              "value": "span",
              "raw": "\"span\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 99,
            "end": 104,
            "literal": {
              "type": "Literal",
              "start": 99,
              "end": 104,
              "value": "div",
              "raw": "\"div\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 250,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 114,
        "end": 250,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 120,
            "end": 249,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "decorators": [],
              "name": "Hoc",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 126,
              "end": 249,
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 126,
                "end": 144,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 127,
                    "end": 143,
                    "name": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 130,
                      "decorators": [],
                      "name": "Tag",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 139,
                      "end": 143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 143,
                        "decorators": [],
                        "name": "Tags",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 149,
                  "end": 164,
                  "decorators": [],
                  "name": "TagElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 159,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 161,
                      "end": 164,
                      "typeName": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 164,
                        "decorators": [],
                        "name": "Tag",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 167,
                "end": 178,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 178,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 169,
                    "end": 178,
                    "left": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 174,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 178,
                      "decorators": [],
                      "name": "SFC",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 182,
                "end": 249,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 187,
                    "end": 226,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 193,
                        "end": 225,
                        "id": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 202,
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 205,
                          "end": 225,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "JSXElement",
                            "start": 211,
                            "end": 225,
                            "openingElement": {
                              "type": "JSXOpeningElement",
                              "start": 211,
                              "end": 225,
                              "name": {
                                "type": "JSXIdentifier",
                                "start": 212,
                                "end": 222,
                                "name": "TagElement"
                              },
                              "typeArguments": null,
                              "attributes": [],
                              "selfClosing": true
                            },
                            "children": [],
                            "closingElement": null
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 230,
                    "end": 247,
                    "argument": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 246,
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
