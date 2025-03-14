__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 45,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 45,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        ]
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
      "start": 47,
      "end": 86,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 86,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 65,
            "end": 84,
            "params": [
              {
                "type": "Identifier",
                "start": 69,
                "end": 78,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 78,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 72,
                    "end": 78
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 83,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 81,
                "end": 83,
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
        "start": 57,
        "end": 61,
        "decorators": [],
        "name": "Obj1",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 101,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
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
      "start": 103,
      "end": 119,
      "expression": {
        "type": "JSXElement",
        "start": 103,
        "end": 118,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 103,
          "end": 118,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 109,
              "end": 115,
              "name": {
                "type": "JSXIdentifier",
                "start": 109,
                "end": 110,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 111,
                "end": 115,
                "expression": {
                  "type": "Literal",
                  "start": 112,
                  "end": 114,
                  "raw": "10",
                  "value": 10
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 104,
            "end": 108,
            "name": "obj1"
          },
          "selfClosing": true
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
