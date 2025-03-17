__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 104,
  "end": 241,
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
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 114,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 117,
            "end": 128,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 123,
              "end": 128,
              "value": "asd",
              "raw": "\"asd\""
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
      "type": "VariableDeclaration",
      "start": 131,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 155,
            "name": "jsxWithJsxFragment",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXFragment",
            "start": 158,
            "end": 169,
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 158,
              "end": 160
            },
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 166,
              "end": 169
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 160,
                "end": 166,
                "expression": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 165,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 197,
            "name": "jsxWithReactFragment",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 200,
            "end": 239,
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
            },
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
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 216,
                "end": 222,
                "expression": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 221,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
