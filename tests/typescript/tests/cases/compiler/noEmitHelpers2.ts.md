__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 26,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 108,
      "decorators": [
        {
          "type": "Decorator",
          "start": 29,
          "end": 39,
          "expression": {
            "type": "Identifier",
            "start": 30,
            "end": 39,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 106,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 65,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 106,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 75,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 69,
                      "end": 75
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 88,
                  "end": 97,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 77,
                      "end": 87,
                      "expression": {
                        "type": "Identifier",
                        "start": 78,
                        "end": 87,
                        "decorators": [],
                        "name": "decorator",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 89,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 91,
                      "end": 97
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 106,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
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
