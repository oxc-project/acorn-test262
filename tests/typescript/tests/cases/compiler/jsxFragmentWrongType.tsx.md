__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 114
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "asd",
              "raw": "\"asd\"",
              "start": 123,
              "end": 128
            },
            "id": null,
            "generator": false,
            "start": 117,
            "end": 128
          },
          "definite": false,
          "start": 110,
          "end": 128
        }
      ],
      "declare": false,
      "start": 104,
      "end": 129
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
            "name": "jsxWithJsxFragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 155
          },
          "init": {
            "type": "JSXFragment",
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 158,
              "end": 160
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 165
                },
                "start": 160,
                "end": 166
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 166,
              "end": 169
            },
            "start": 158,
            "end": 169
          },
          "definite": false,
          "start": 137,
          "end": 169
        }
      ],
      "declare": false,
      "start": 131,
      "end": 170
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
            "name": "jsxWithReactFragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 197
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "React",
                  "start": 201,
                  "end": 206
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "Fragment",
                  "start": 207,
                  "end": 215
                },
                "start": 201,
                "end": 215
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 200,
              "end": 216
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 221
                },
                "start": 216,
                "end": 222
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "React",
                  "start": 224,
                  "end": 229
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "Fragment",
                  "start": 230,
                  "end": 238
                },
                "start": 224,
                "end": 238
              },
              "start": 222,
              "end": 239
            },
            "start": 200,
            "end": 239
          },
          "definite": false,
          "start": 177,
          "end": 239
        }
      ],
      "declare": false,
      "start": 171,
      "end": 240
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 104,
  "end": 240
}
```
