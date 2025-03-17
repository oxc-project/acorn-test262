__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 99,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 97,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 77,
                  "end": 94,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 87,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
      "start": 133,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 145,
            "name": "class1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 148,
            "end": 153,
            "value": "foo",
            "raw": "\"foo\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 167,
            "name": "class2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 170,
            "end": 175,
            "value": "bar",
            "raw": "\"bar\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 187,
            "name": "elem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 190,
            "end": 223,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 190,
              "end": 223,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 195,
                  "end": 221,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 195,
                    "end": 204,
                    "name": "className"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 205,
                    "end": 221,
                    "expression": {
                      "type": "SequenceExpression",
                      "start": 206,
                      "end": 220,
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 206,
                          "end": 212,
                          "name": "class1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 214,
                          "end": 220,
                          "name": "class2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ]
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 191,
                "end": 194,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
