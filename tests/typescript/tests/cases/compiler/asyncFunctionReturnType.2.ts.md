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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 106,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 74,
              "end": 105,
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
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
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
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
              },
              "body": {
                "type": "ThisExpression",
                "start": 101,
                "end": 105
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
