__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 45,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 36,
              "decorators": [],
              "name": "newSymbolProp",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
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
        "end": 16,
        "decorators": [],
        "name": "Symbol",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 64,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 58,
                "end": 64
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
      "start": 66,
      "end": 84,
      "expression": {
        "type": "MemberExpression",
        "start": 66,
        "end": 83,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 66,
          "end": 69,
          "decorators": [],
          "name": "sym",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 70,
          "end": 83,
          "decorators": [],
          "name": "newSymbolProp",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
