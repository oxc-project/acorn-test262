__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 97
          },
          "start": 87,
          "end": 97
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 103,
        "end": 110
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 80,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test123",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 126
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 136,
                  "end": 139
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 135,
                "end": 141
              },
              "children": [],
              "closingElement": null,
              "start": 135,
              "end": 141
            },
            "id": null,
            "generator": false,
            "start": 129,
            "end": 141
          },
          "definite": false,
          "start": 119,
          "end": 141
        }
      ],
      "declare": false,
      "start": 113,
      "end": 142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 166
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 172
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "Test123",
                  "start": 188,
                  "end": 195
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 205
                    },
                    "start": 196,
                    "end": 206
                  }
                ],
                "selfClosing": true,
                "start": 187,
                "end": 208
              },
              "children": [],
              "closingElement": null,
              "start": 187,
              "end": 208
            },
            "start": 180,
            "end": 209
          }
        ],
        "start": 174,
        "end": 211
      },
      "expression": false,
      "start": 144,
      "end": 211
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 80,
  "end": 211
}
```
