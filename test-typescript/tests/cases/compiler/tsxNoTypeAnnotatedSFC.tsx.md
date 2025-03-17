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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 126,
            "name": "Test123",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 129,
            "end": 141,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "JSXElement",
              "start": 135,
              "end": 141,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 135,
                "end": 141,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 136,
                  "end": 139,
                  "name": "div"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "testComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 167,
          "end": 172,
          "name": "props",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "start": 196,
                    "end": 206,
                    "argument": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 205,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 188,
                  "end": 195,
                  "name": "Test123"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
