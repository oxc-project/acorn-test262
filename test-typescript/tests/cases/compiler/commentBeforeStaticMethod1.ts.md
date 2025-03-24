__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 94,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 92,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 92,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 92,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 88,
                    "argument": {
                      "type": "Literal",
                      "start": 82,
                      "end": 87,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 60,
                "end": 68,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 62,
                  "end": 68
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
