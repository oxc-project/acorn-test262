deleteReadonlyInStrictNullChecks.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 45,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 45,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 43,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 34,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
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
        "end": 18,
        "decorators": [],
        "name": "Function",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 58,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 58,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 75,
      "expression": {
        "type": "UnaryExpression",
        "start": 59,
        "end": 74,
        "argument": {
          "type": "MemberExpression",
          "start": 66,
          "end": 74,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 74,
            "decorators": [],
            "name": "name",
            "optional": false
          }
        },
        "operator": "delete",
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
}
```
