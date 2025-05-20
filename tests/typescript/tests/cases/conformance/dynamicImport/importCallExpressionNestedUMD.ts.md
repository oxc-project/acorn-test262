__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "raw": "\"./foo\"",
        "value": "./foo"
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 82,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 82,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 27,
            "end": 80,
            "argument": {
              "type": "AwaitExpression",
              "start": 34,
              "end": 79,
              "argument": {
                "type": "ImportExpression",
                "start": 40,
                "end": 79,
                "options": null,
                "source": {
                  "type": "MemberExpression",
                  "start": 47,
                  "end": 78,
                  "computed": false,
                  "object": {
                    "type": "AwaitExpression",
                    "start": 48,
                    "end": 69,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 54,
                      "end": 69,
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "start": 61,
                        "end": 68,
                        "raw": "\"./foo\"",
                        "value": "./foo"
                      },
                      "phase": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 78,
                    "decorators": [],
                    "name": "default",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "phase": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
