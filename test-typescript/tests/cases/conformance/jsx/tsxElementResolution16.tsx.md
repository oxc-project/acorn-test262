__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 22,
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
        "end": 22,
        "body": []
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 24,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 38,
        "name": "Obj1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 63,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 42,
            "end": 61,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 46,
                "end": 55,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 58,
                "end": 60,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 78,
            "name": "obj1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 78,
                  "name": "Obj1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 96,
      "expression": {
        "type": "JSXElement",
        "start": 80,
        "end": 95,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 80,
          "end": 95,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 86,
              "end": 92,
              "name": {
                "type": "JSXIdentifier",
                "start": 86,
                "end": 87,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 88,
                "end": 92,
                "expression": {
                  "type": "Literal",
                  "start": 89,
                  "end": 91,
                  "value": 10,
                  "raw": "10"
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 81,
            "end": 85,
            "name": "obj1"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
