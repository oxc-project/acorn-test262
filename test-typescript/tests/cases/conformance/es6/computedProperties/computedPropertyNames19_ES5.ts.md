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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 56,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 15,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 54,
                "definite": false,
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
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 36,
                        "end": 44,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 36,
                          "end": 40
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 41,
                          "end": 44,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 47,
                        "end": 48,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
