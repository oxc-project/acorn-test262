__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 101,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 99,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 96,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "decorators": [],
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 95,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 84,
                      "end": 95,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 85,
                          "end": 94,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 86,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 86,
                            "end": 94,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 88,
                              "end": 94
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 114,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 113,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 110,
                "end": 113
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 147,
      "expression": {
        "type": "JSXElement",
        "start": 131,
        "end": 147,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 131,
          "end": 147,
          "name": {
            "type": "JSXIdentifier",
            "start": 132,
            "end": 137,
            "name": "test1"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 138,
              "end": 144,
              "argument": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
