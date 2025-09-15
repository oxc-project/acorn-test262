__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 25
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 39,
                          "end": 43
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 44,
                          "end": 47
                        },
                        "optional": false,
                        "computed": false,
                        "start": 39,
                        "end": 47
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 50,
                        "end": 51
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 38,
                      "end": 51
                    }
                  ],
                  "start": 28,
                  "end": 57
                },
                "definite": false,
                "start": 22,
                "end": 57
              }
            ],
            "declare": false,
            "start": 18,
            "end": 57
          }
        ],
        "start": 12,
        "end": 59
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 59
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
