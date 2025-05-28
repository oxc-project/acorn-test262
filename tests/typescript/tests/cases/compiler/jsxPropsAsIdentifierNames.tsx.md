__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null
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
                            "decorators": [],
                            "name": "static",
                            "optional": false,
                            "typeAnnotation": null
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
          "name": {
            "type": "JSXIdentifier",
            "start": 164,
            "end": 167,
            "name": "div"
          },
          "typeArguments": null,
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
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
