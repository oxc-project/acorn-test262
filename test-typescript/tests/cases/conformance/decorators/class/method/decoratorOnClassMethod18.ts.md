decoratorOnClassMethod18.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 26,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 26,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 75,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 75,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 47,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 47,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 73,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 53,
                "end": 65,
                "expression": {
                  "type": "CallExpression",
                  "start": 54,
                  "end": 65,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 63,
                    "decorators": [],
                    "name": "decorator",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 72,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
