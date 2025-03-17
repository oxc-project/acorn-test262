__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 108,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 74,
              "end": 105,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "ThisExpression",
                "start": 101,
                "end": 105
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 82,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 84,
                  "end": 97,
                  "typeName": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 91,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 91,
                    "end": 97,
                    "params": [
                      {
                        "type": "TSThisType",
                        "start": 92,
                        "end": 96
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
