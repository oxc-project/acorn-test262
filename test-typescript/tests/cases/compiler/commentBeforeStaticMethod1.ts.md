commentBeforeStaticMethod1.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 94,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 92,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 92,
              "async": false,
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
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
