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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 22,
        "decorators": [],
        "name": "createElement",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 55,
            "end": 63,
            "decorators": [],
            "name": "children",
            "optional": false,
            "typeAnnotation": null
          },
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
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 79,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 81,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 94,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 95,
        "end": 181,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 179,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 106,
              "end": 179,
              "id": {
                "type": "Identifier",
                "start": 116,
                "end": 133,
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 134,
                "end": 179,
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "start": 140,
                    "end": 175,
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 174,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 155,
                        "end": 174,
                        "typeName": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 161,
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                        }
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
    {
      "type": "ExportNamedDeclaration",
      "start": 183,
      "end": 213,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 192,
          "end": 205,
          "local": {
            "type": "Identifier",
            "start": 192,
            "end": 205,
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 192,
            "end": 205,
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 207,
          "end": 210,
          "local": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 207,
            "end": 210,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 34,
        "value": "./library",
        "raw": "\"./library\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 67,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 66,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 53,
              "end": 66,
              "name": {
                "type": "JSXIdentifier",
                "start": 54,
                "end": 64,
                "name": "my-element"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
