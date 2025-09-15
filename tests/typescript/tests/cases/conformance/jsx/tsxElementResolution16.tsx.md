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
        "body": [],
        "start": 22,
        "end": 25
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 41
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
                    "start": 52,
                    "end": 58
                  },
                  "start": 50,
                  "end": 58
                },
                "start": 49,
                "end": 58
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 61,
                "end": 63
              },
              "start": 59,
              "end": 63
            },
            "start": 45,
            "end": 64
          }
        ],
        "start": 42,
        "end": 66
      },
      "declare": false,
      "start": 27,
      "end": 66
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
                  "start": 77,
                  "end": 81
                },
                "typeArguments": null,
                "start": 77,
                "end": 81
              },
              "start": 75,
              "end": 81
            },
            "start": 71,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 81
        }
      ],
      "declare": false,
      "start": 67,
      "end": 82
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
            "start": 84,
            "end": 88
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 89,
                "end": 90
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 92,
                  "end": 94
                },
                "start": 91,
                "end": 95
              },
              "start": 89,
              "end": 95
            }
          ],
          "selfClosing": true,
          "start": 83,
          "end": 98
        },
        "children": [],
        "closingElement": null,
        "start": 83,
        "end": 98
      },
      "directive": null,
      "start": 83,
      "end": 99
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
