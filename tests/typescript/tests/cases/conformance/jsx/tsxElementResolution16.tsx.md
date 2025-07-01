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
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 19,
        "end": 22
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 38
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  },
                  "start": 47,
                  "end": 55
                },
                "start": 46,
                "end": 55
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 58,
                "end": 60
              },
              "start": 56,
              "end": 60
            },
            "start": 42,
            "end": 61
          }
        ],
        "start": 39,
        "end": 63
      },
      "declare": false,
      "start": 24,
      "end": 63
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 78
                },
                "typeArguments": null,
                "start": 74,
                "end": 78
              },
              "start": 72,
              "end": 78
            },
            "start": 68,
            "end": 78
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 78
        }
      ],
      "declare": false,
      "start": 64,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "obj1",
            "start": 81,
            "end": 85
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 86,
                "end": 87
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 89,
                  "end": 91
                },
                "start": 88,
                "end": 92
              },
              "start": 86,
              "end": 92
            }
          ],
          "selfClosing": true,
          "start": 80,
          "end": 95
        },
        "children": [],
        "closingElement": null,
        "start": 80,
        "end": 95
      },
      "directive": null,
      "start": 80,
      "end": 96
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 135
}
```
