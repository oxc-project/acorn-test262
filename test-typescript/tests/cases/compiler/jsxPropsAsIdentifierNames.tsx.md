__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 147,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 45,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 46,
              "end": 49,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 54,
            "end": 145,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 81,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 82,
              "end": 145,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 92,
                  "end": 139,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 95,
                    "name": "div",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 97,
                      "end": 138,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 111,
                          "end": 128,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 117,
                            "name": "static",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 118,
                            "end": 127,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 120,
                              "end": 127
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
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 148,
      "end": 185,
      "declaration": {
        "type": "JSXElement",
        "start": 163,
        "end": 184,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 163,
          "end": 184,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 168,
              "end": 181,
              "name": {
                "type": "JSXIdentifier",
                "start": 168,
                "end": 174,
                "name": "static"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 175,
                "end": 181,
                "expression": {
                  "type": "Literal",
                  "start": 176,
                  "end": 180,
                  "value": true,
                  "raw": "true"
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 164,
            "end": 167,
            "name": "div"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
