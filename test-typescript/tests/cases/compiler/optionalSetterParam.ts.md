__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 49,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 49,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 47,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 31,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 47,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 47,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 32,
                  "end": 42,
                  "decorators": [],
                  "name": "param",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 39,
                      "end": 42
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
