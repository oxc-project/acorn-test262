__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 66,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 41,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 23,
                "end": 41,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 24,
                    "end": 32,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 32,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 26,
                        "end": 32
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 41,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 35,
                    "end": 41
                  }
                }
              }
            },
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 65,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 65,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 56,
                    "end": 64,
                    "argument": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
