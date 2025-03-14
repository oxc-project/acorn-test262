file.tsx
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
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 24,
      "end": 63,
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 63,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 42,
            "end": 61,
            "params": [
              {
                "type": "Identifier",
                "start": 46,
                "end": 55,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  }
                }
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 38,
        "decorators": [],
        "name": "Obj1",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 78,
            "decorators": [],
            "name": "obj1",
            "optional": false,
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
                  "decorators": [],
                  "name": "Obj1",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 96,
      "expression": {
        "type": "JSXElement",
        "start": 80,
        "end": 95,
        "children": [],
        "closingElement": null,
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
                  "raw": "10",
                  "value": 10
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
          "selfClosing": true
        }
      }
    }
  ],
  "sourceType": "script"
}
```
