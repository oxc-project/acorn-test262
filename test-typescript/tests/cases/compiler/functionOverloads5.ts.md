functionOverloads5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 57,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 57,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 28,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 25,
              "end": 28,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 55,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 42,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 55,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 55,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 51,
                  "decorators": [],
                  "name": "bar",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 48,
                      "end": 51
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
        "end": 9,
        "decorators": [],
        "name": "baz",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
