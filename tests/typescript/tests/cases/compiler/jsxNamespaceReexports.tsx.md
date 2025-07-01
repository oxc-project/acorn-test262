__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "element",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 32,
              "end": 38
            },
            "start": 30,
            "end": 38
          },
          "start": 23,
          "end": 38
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 47,
              "end": 50
            },
            "start": 45,
            "end": 50
          },
          "start": 40,
          "end": 50
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "children",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 63
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
              },
              "start": 65,
              "end": 70
            },
            "start": 63,
            "end": 70
          },
          "value": null,
          "start": 52,
          "end": 70
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 73,
          "end": 76
        },
        "start": 71,
        "end": 76
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 77,
        "end": 79
      },
      "expression": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 94
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 133
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 146,
                            "end": 152
                          },
                          "start": 144,
                          "end": 152
                        },
                        "start": 141,
                        "end": 152
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 161
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
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
                          ],
                          "start": 161,
                          "end": 174
                        },
                        "start": 155,
                        "end": 174
                      },
                      "start": 153,
                      "end": 174
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 140,
                    "end": 175
                  }
                ],
                "start": 134,
                "end": 179
              },
              "declare": false,
              "start": 106,
              "end": 179
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 99,
            "end": 179
          }
        ],
        "start": 95,
        "end": 181
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 81,
      "end": 181
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 205
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 205
          },
          "exportKind": "value",
          "start": 192,
          "end": 205
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 210
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 210
          },
          "exportKind": "value",
          "start": 207,
          "end": 210
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 183,
      "end": 213
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 213
}
```
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
            "name": "MyLib",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./library",
        "raw": "\"./library\"",
        "start": 23,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "content",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 50
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "my-element",
                "start": 54,
                "end": 64
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 53,
              "end": 66
            },
            "children": [],
            "closingElement": null,
            "start": 53,
            "end": 66
          },
          "definite": false,
          "start": 43,
          "end": 66
        }
      ],
      "declare": false,
      "start": 37,
      "end": 67
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 67
}
```
