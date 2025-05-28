__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 80,
  "end": 211,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 80,
      "end": 111,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 87,
          "end": 97,
          "local": {
            "type": "Identifier",
            "start": 92,
            "end": 97,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 110,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 142,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 126,
            "decorators": [],
            "name": "Test123",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 129,
            "end": 141,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 135,
              "end": 141,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 135,
                "end": 141,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 136,
                  "end": 139,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 166,
        "decorators": [],
        "name": "testComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 167,
          "end": 172,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 211,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 180,
            "end": 209,
            "argument": {
              "type": "JSXElement",
              "start": 187,
              "end": 208,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 187,
                "end": 208,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 188,
                  "end": 195,
                  "name": "Test123"
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "start": 196,
                    "end": 206,
                    "argument": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 205,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
