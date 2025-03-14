__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 17,
            "end": 29,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
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
        "name": "Qux",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 82,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 82,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 80,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 73,
                "end": 79
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 53,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 53,
            "end": 56,
            "decorators": [],
            "name": "Qux",
            "optional": false
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
