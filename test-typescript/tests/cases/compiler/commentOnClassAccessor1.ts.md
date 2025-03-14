commentOnClassAccessor1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 76,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 76,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 74,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 74,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 74,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 73,
                    "argument": {
                      "type": "Literal",
                      "start": 71,
                      "end": 72,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 53,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 55,
                  "end": 61
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
