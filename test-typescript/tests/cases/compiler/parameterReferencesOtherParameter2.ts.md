__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 40,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 40,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 18,
            "end": 38,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
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
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 42,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 114,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 68,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 112,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 69,
                  "end": 81,
                  "decorators": [],
                  "name": "model",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 74,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 76,
                      "end": 81,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 81,
                        "decorators": [],
                        "name": "Model",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 83,
                  "end": 99,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "MemberExpression",
                    "start": 89,
                    "end": 99,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 94,
                      "decorators": [],
                      "name": "model",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 99,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 50,
        "decorators": [],
        "name": "UI",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
