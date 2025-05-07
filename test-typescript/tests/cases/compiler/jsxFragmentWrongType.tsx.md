__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 104,
  "end": 240,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 114,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 117,
            "end": 128,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 123,
              "end": 128,
              "raw": "\"asd\"",
              "value": "asd",
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 155,
            "decorators": [],
            "name": "jsxWithJsxFragment",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXFragment",
            "start": 158,
            "end": 169,
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 160,
                "end": 166,
                "expression": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 165,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 166,
              "end": 169
            },
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 158,
              "end": 160
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 197,
            "decorators": [],
            "name": "jsxWithReactFragment",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 200,
            "end": 239,
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 216,
                "end": 222,
                "expression": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 221,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 222,
              "end": 239,
              "name": {
                "type": "JSXMemberExpression",
                "start": 224,
                "end": 238,
                "object": {
                  "type": "JSXIdentifier",
                  "start": 224,
                  "end": 229,
                  "name": "React"
                },
                "property": {
                  "type": "JSXIdentifier",
                  "start": 230,
                  "end": 238,
                  "name": "Fragment"
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 200,
              "end": 216,
              "attributes": [],
              "name": {
                "type": "JSXMemberExpression",
                "start": 201,
                "end": 215,
                "object": {
                  "type": "JSXIdentifier",
                  "start": 201,
                  "end": 206,
                  "name": "React"
                },
                "property": {
                  "type": "JSXIdentifier",
                  "start": 207,
                  "end": 215,
                  "name": "Fragment"
                }
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
