__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 56,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 15,
            "end": 54,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 54,
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 22,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 25,
                  "end": 54,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 35,
                      "end": 48,
                      "kind": "init",
                      "key": {
                        "type": "MemberExpression",
                        "start": 36,
                        "end": 44,
                        "object": {
                          "type": "ThisExpression",
                          "start": 36,
                          "end": 40
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 41,
                          "end": 44,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 47,
                        "end": 48,
                        "value": 0,
                        "raw": "0"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
