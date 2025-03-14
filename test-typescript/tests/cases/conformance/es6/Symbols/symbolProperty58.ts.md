symbolProperty58.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSInterfaceBody",
        "start": 28,
        "end": 48,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 46,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
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
        "end": 27,
        "decorators": [],
        "name": "SymbolConstructor",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 83,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 57,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 60,
            "end": 83,
            "properties": [
              {
                "type": "Property",
                "start": 66,
                "end": 81,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 67,
                  "end": 77,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 73,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 77,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 81,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
