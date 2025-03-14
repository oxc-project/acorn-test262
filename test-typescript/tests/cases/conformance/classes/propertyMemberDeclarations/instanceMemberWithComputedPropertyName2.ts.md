instanceMemberWithComputedPropertyName2.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 112,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 69,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 56,
        "end": 68,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 81,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 111,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 91,
        "end": 111,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 109,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 108,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 102,
                "end": 108
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
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
