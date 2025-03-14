/node_modules/@typescript/lib-dom/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 29,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 29,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 27,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "abc",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "ABC",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 28,
  "end": 159,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "decorators": [],
                  "name": "ABC",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 43,
            "end": 59,
            "properties": [
              {
                "type": "Property",
                "start": 45,
                "end": 57,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "decorators": [],
                  "name": "abc",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 50,
                  "end": 57,
                  "raw": "\"Hello\"",
                  "value": "Hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 158,
      "expression": {
        "type": "MemberExpression",
        "start": 139,
        "end": 158,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 139,
          "end": 145,
          "decorators": [],
          "name": "window",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 146,
          "end": 158,
          "decorators": [],
          "name": "localStorage",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
