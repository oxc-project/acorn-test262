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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 89,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 87,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 86,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                    "typeParameters": null,
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 39,
                        "end": 48,
                        "name": "i",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 40,
                          "end": 48,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 42,
                            "end": 48
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            "accessibility": "public"
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
