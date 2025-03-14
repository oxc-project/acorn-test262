__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 89,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 89,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 87,
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
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 24,
                "end": 60,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 26,
                    "end": 37,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 28,
                      "end": 36,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 30,
                        "end": 36
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 38,
                    "end": 58,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 39,
                        "end": 48,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 40,
                          "end": 48,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 42,
                            "end": 48
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  }
                ]
              }
            },
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 86,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 86,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 76,
                    "end": 84,
                    "argument": {
                      "type": "Literal",
                      "start": 83,
                      "end": 84,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
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
