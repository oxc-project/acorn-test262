__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 88,
                            "end": 89
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 91,
                              "end": 97
                            },
                            "start": 89,
                            "end": 97
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 88,
                          "end": 97
                        }
                      ],
                      "start": 87,
                      "end": 98
                    },
                    "start": 85,
                    "end": 98
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 99
                }
              ],
              "start": 76,
              "end": 102
            },
            "declare": false,
            "start": 48,
            "end": 102
          }
        ],
        "start": 22,
        "end": 104
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 104
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 113,
                "end": 116
              },
              "start": 111,
              "end": 116
            },
            "start": 110,
            "end": 116
          },
          "init": null,
          "definite": false,
          "start": 110,
          "end": 116
        }
      ],
      "declare": false,
      "start": 106,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 135,
            "end": 140
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 146
              },
              "start": 141,
              "end": 147
            }
          ],
          "selfClosing": true,
          "start": 134,
          "end": 150
        },
        "children": [],
        "closingElement": null,
        "start": 134,
        "end": 150
      },
      "directive": null,
      "start": 134,
      "end": 150
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 150
}
```
