getAndSetNotIdenticalType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 82,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 82,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 55,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 55,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 55,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 40,
                    "end": 49,
                    "argument": {
                      "type": "Literal",
                      "start": 47,
                      "end": 48,
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
                "start": 21,
                "end": 29,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 23,
                  "end": 29
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 80,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 80,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 80,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 75,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 69,
                      "end": 75
                    }
                  }
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
