__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 56,
        "end": 68
      },
      "directive": "use strict",
      "start": 56,
      "end": 69
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 80,
            "end": 81
          },
          "definite": false,
          "start": 76,
          "end": 81
        }
      ],
      "declare": false,
      "start": 70,
      "end": 82
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 90
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 102,
                "end": 108
              },
              "start": 100,
              "end": 108
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 97,
            "end": 109
          }
        ],
        "start": 91,
        "end": 111
      },
      "abstract": false,
      "declare": false,
      "start": 83,
      "end": 111
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 111
}
```
