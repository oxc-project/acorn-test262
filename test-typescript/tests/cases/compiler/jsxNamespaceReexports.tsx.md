__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 79,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 22,
        "decorators": [],
        "name": "createElement",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 38,
          "decorators": [],
          "name": "element",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 38,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 32,
              "end": 38
            }
          }
        },
        {
          "type": "Identifier",
          "start": 40,
          "end": 50,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 50,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 47,
              "end": 50
            }
          }
        },
        {
          "type": "RestElement",
          "start": 52,
          "end": 70,
          "argument": {
            "type": "Identifier",
            "start": 55,
            "end": 63,
            "decorators": [],
            "name": "children",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 70,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 65,
              "end": 70,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 71,
        "end": 76,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 73,
          "end": 76
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 81,
      "end": 181,
      "body": {
        "type": "TSModuleBlock",
        "start": 95,
        "end": 181,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 179,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 106,
              "end": 179,
              "body": {
                "type": "TSInterfaceBody",
                "start": 134,
                "end": 179,
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "start": 140,
                    "end": 175,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 141,
                        "end": 152,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 144,
                          "end": 152,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 146,
                            "end": 152
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 174,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 155,
                        "end": 174,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 161,
                          "end": 174,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 162,
                              "end": 168
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 170,
                              "end": 173
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 161,
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 116,
                "end": 133,
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null
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
        "start": 91,
        "end": 94,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 183,
      "end": 213,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 192,
          "end": 205,
          "exported": {
            "type": "Identifier",
            "start": 192,
            "end": 205,
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 192,
            "end": 205,
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 207,
          "end": 210,
          "exported": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 34,
        "raw": "\"./library\"",
        "value": "./library",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "MyLib",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 50,
            "decorators": [],
            "name": "content",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 53,
            "end": 66,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 53,
              "end": 66,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 54,
                "end": 64,
                "name": "my-element"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
